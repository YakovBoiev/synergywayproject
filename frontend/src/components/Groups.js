import React from 'react';
import {Link} from "react-router-dom";

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
             <Link to='/groups/create/0'>ADD GROUPS</Link>
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
