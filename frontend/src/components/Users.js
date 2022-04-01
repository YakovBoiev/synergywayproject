import React from 'react';


const UserItem = ({user, removeUser}) => {
    return(
        <tr>
            <td>{user.username}</td>
            <td>{user.created}</td>
            <td>{user.group.name}</td>
            <td>
                <button><a href={'/users/create/' + user.id}>EDIT USER</a></button>
                <button onClick={()=>removeUser(user.id)}>DELETE</button>
            </td>
        </tr>
    )
}


const UserList = ({users, removeUser}) => {
    return(
        <div>
        <button><a href='/users/create/0'>ADD USER</a></button>
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
