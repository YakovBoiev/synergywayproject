import React from "react";
import {useParams} from "react-router-dom";


class GroupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'name': '',
            'description': ''
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
        this.props.createGroup(this.state.name,this.state.description)
        event.preventDefault()
        window.location.assign('/')
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="name" placeholder="name" value={this.state.name}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="text" name="description" placeholder="description" value={this.state.description}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="submit" value="Add Group"/>
            </form>
        );
    }
}

export default GroupForm;