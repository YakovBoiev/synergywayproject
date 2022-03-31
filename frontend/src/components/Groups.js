import React from 'react';

const GroupItem = ({group}) => {
    return(
        <tr>
            <td>{group.id}</td>
            <td>{group.name}</td>
            <td>{group.description}</td>
            <td>{}</td>
        </tr>
    )
}

const GroupList = ({groups}) => {
    return(
        <table>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>actions</th>
            {groups.map((group) => <GroupItem group={group}/>)}
        </table>
    )
};

export default GroupList;
