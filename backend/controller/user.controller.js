import User from "../model/user.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check the password
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    // Check if user already exist through email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email is already exist" });
    }

    //Hasing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // for registring the user
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({
        msg: "User registerd successfully",
        user: {
          _id: newUser._id,
          name: newUser.name,
          password: newUser.password,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error!" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(404).json({ msg: "Invalid User or password" });
    }
    createTokenAndSaveCookie(user._id, res);
    res.status(201).json({
      message: "User logged in successfully",
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error!" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ msg: "User loggeg out suceessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error!" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(201).json({ filteredUsers });
  } catch (error) {
    console.error("Error in allUsers Controller" + "" + error);
    res.status(500).json({ message: "Server error" });
  }
};
