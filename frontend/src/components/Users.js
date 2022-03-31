import React from 'react';


const UserItem = ({user, remove_user}) => {
    return(
        <tr>
            <td>{user.username}</td>
            <td>{user.created}</td>
            <td>{user.group.name}</td>
            <td>
                <button>EDIT</button>
                <button onClick={()=>remove_user(user.id)}>DELETE</button>
            </td>
        </tr>
    )
}


const UserList = ({users, remove_user}) => {
    return(
        <div>
        <button>Add User</button>
        <table>
            <th>username</th>
            <th>created</th>
            <th>group</th>
            <th>actions</th>
            {users.map((user) => <UserItem user={user} remove_user={remove_user}/>)}
        </table>
        </div>
    )
};

export default UserList;
