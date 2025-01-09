import User from './User';
import userGetAllUser from '../../context/userGetAllUser';


const Users = ( ) => {
  const [allUsers,loading] = userGetAllUser();
  console.log(allUsers);
  return (
    <div className='py-2 flex-arindam overflow-y-auto' style={{ maxHeight:"calc(94vh - 1vh)"}}>
        {
          allUsers.map((user,index) => {
            return <User key={index} user={user} />
          })
        }
    </div>
  )
}

export default Users;