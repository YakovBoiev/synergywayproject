import React from "react";
import {GroupSelect} from "./Groups";


class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'username': '',
            'group_id': this.props.groups[0].id
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }

        )
        console.log(this.username, this.group_id)
    };

    handleSubmit(event) {
        this.props.createUser(this.state.group_id, this.state.username)
        event.preventDefault()
        window.location.assign('/')
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <select name="group_id" value={this.state.group_id} onChange={(event) => this.handleChange(event)}>
                <GroupSelect groups={this.props.groups}/>
                </select>
                <input type="text" name="username" placeholder="username" value={this.state.username}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="submit" value="Add User"/>
            </form>
        );
    }
}

export default UserForm;