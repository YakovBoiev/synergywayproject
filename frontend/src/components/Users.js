import React from 'react';
import {Link} from "react-router-dom";


const UserItem = ({user, removeUser}) => {
    return(
        <tr>
            <td>{user.username}</td>
            <td>{user.created}</td>
            <td>{user.group.name}</td>
            <td>
                <button>EDIT USER</button>
                <button onClick={()=>removeUser(user.id)} >DELETE</button>
            </td>
        </tr>
    )
}


const UserList = ({users, removeUser}) => {
    return(
        <div>
            <Link to='/users/create/0'>ADD USER </Link>
        <table>
            <th>username</th>
            <th>created</th>
            <th>group</th>
            <th>actions</th>
            {users.map((user) => <UserItem user={user} removeUser={removeUser}/>)}
        </table>
        </div>
    )
};

export default UserList;
