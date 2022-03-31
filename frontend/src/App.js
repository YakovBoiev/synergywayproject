import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import UserList from './components/Users.js'
import GroupList from "./components/Groups";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const NotFound404 = ({location}) => {
    return(
        <div>
            <h1> Страница по адрресу '{location.pathname}' не найдена </h1>
        </div>
    )
}

class App extends Component {
  constructor(props) {
        super(props)
        this.state = {
            'users' : [],
            'groups': []
        }
    }

    componentDidMount() {
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



  render() {
    return (
      <div>
          <Router>
              <div>
              <Routes>
                  <Route path='/' element={<UserList users={this.state.users}/>} />
                  <Route path='/groups' element={<GroupList groups={this.state.groups}/>} />
              </Routes>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
