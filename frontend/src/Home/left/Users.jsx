import User from "./User";
import userGetAllUser from "../../context/userGetAllUser";

const Users = () => {
  const { allUser } = userGetAllUser();

  return (
    <div className="py-2">
      <div className="space-y-1">
        {allUser?.map((user) => (
          <div key={user._id} className="px-2">
            <User user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
