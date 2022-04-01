import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import UserList from './components/Users.js'
import {GroupList} from "./components/Groups";
import GroupForm from "./components/GroupForm";
import {BrowserRouter as Router, Routes, Route, Link, Redirect, useParams} from 'react-router-dom';
import UserForm from "./components/UserForm";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'groups': []
        }
    }


    loadData () {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                    const users = response.data
                    this.setState(
                        {
                            'users': users
                        }
                    )
                }
            )
            .catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/groups/')
            .then(response => {
                    const groups = response.data
                    this.setState(
                        {
                            'groups': groups
                        }
                    )
                }
            )
            .catch(error => console.log(error))
    }

    createGroup(name, description){
        axios.post('http://127.0.0.1:8000/api/groups/', {'name': name, 'description': description})
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    updateGroup(_id, name, description){
        axios.patch('http://127.0.0.1:8000/api/groups/' + _id, {'name': name, 'description': description})
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    removeGroup(_id){
        axios.delete('http://127.0.0.1:8000/api/groups/' + _id)
            .then(response => {
                console.log(response.status)
            })
            .catch(error => console.log(error))
    }


    createUser(group_id, username){
        axios.post('http://127.0.0.1:8000/api/users/', {'group': group_id, 'username': username})
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    removeUser(_id){
        axios.delete('http://127.0.0.1:8000/api/users/' + _id)
            .then(response => {
                console.log(response.status)
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.loadData()
    }


    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/'>USERS</Link>
                                </li>
                                <li>
                                    <Link to='/groups'>GROUPS</Link>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path='/' element={<UserList users={this.state.users} removeUser={this.removeUser} />}/>
                            <Route path='/groups' element={<GroupList groups={this.state.groups} removeGroup={this.removeGroup}/>}/>
                            <Route path='/groups/create/:id' element={<GroupForm createGroup={this.createGroup} />}/>
                            <Route path='/users/create/:id' element={<UserForm groups={this.state.groups} createUser={this.createUser}/>}/>
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
