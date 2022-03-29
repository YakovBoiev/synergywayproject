import React from 'react';

const UserItem = ({user}) => {
    return(
        <tr>
            <td>{user.username}</td>
            <td>{user.created}</td>
            <td>{user.group.name}</td>
            <td>{}</td>
        </tr>
    )
}

const UserList = ({users}) => {
    return(
        <table>
            <th>username</th>
            <th>created</th>
            <th>group</th>
            <th>actions</th>
            {users.map((user) => <UserItem user={user}/>)}
        </table>
    )
};

export default UserList;
