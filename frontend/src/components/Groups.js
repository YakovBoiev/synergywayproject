import React from 'react';
import {Link} from "react-router-dom";

const GroupItem = ({group, removeGroup}) => {
    return(
        <tr>
            <td>{group.id}</td>
            <td>{group.name}</td>
            <td>{group.description}</td>
            <td>
                <button><a href={'/groups/create/' + group.id}>EDIT GROUP</a></button>
                <button onClick={()=>removeGroup(group.id)}>DELETE</button>
            </td>
        </tr>
    )
}

const GroupList = ({groups, removeGroup}) => {
    return(
        <div>
            <button>
                <a href='/groups/create/0'>ADD GROUP</a>
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
}

const GroupSelect = ({groups}) => {
    return(
        groups.map((group) => <option value={group.id}>{group.name}</option>)
    )
};

export {GroupList, GroupSelect};
