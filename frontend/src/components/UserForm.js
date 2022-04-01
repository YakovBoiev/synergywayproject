import React from "react";
import {useParams} from "react-router-dom";


class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'surname': '',
            'group': ''
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    };

    handleSubmit(event) {
        this.props.createUser(this.state.group, this.state.surname)
        console.log(this.state.group, this.state.surname)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="group" placeholder="group" value={this.state.name}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="text" name="surname" placeholder="surname" value={this.state.description}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="submit" value="Add User"/>
            </form>
        );
    }
}

export default UserForm;