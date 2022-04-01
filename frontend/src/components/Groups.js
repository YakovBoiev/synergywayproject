import React from 'react';
import {Link, Redirect} from "react-router-dom";

const GroupItem = ({group, removeGroup}) => {
    return(
        <tr>
            <td>{group.id}</td>
            <td>{group.name}</td>
            <td>{group.description}</td>
            <td>
                <button>EDIT</button>
                <button onClick={()=>removeGroup(group.id)}>DELETE</button>
            </td>
        </tr>
    )
}

const GroupList = ({groups, removeGroup}) => {
    return(
        <div>
            <button>
                <a href='/groups/create/0'>Add Group</a>
            </button>
        <table>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>actions</th>
            {groups.map((group) => <GroupItem group={group} removeGroup={removeGroup}/>)}
        </table>
        </div>
    )
};

export default GroupList;
