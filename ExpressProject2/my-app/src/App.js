import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './service/service'


class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
    render : '',
    updateUser: ''
  }

  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }
  showUsers(){
    console.log("clicked...");
    this.setState({render: true})
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  hideUsers(){
    console.log("clicked...");
    this.setState({render: false})
    
  }

  updateUser = (e) => {

    this.setState({update: true})

  }

  onChangeForm = (e) => {
      let user = this.state.user
      let password = e.target.getAttribute("password");
      let password2 = e.target.getAttribute("password2");
      console.log("First Password: "  + password);
      console.log("HELOOOO>>>>>");

      user.id = this.state.numberOfUsers + 1;
     if (e.target.name === 'email') {
          user.email = e.target.value;
      } else if (e.target.name === 'password') {
      
          user.password = e.target.value;

          if(password === password2){
            console.log("Passwords match");
          }
          else{
            console.log("Passwords do not match");
          }
      } 
      
     
      this.setState({user})
      
  }

  

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>

        <button type="button" onClick={(e) => this.showUsers('show')} className="btn btn-warning">Show Users</button>
        <button type="button" onClick={(e) => this.hideUsers('show')} className="btn btn-primary">Hide Users</button>

        <div className="row mrgnbtm">
           {this.state.render && <Users users={this.state.users} updateUserRow = {this.state.updateUser}></Users>}

        </div>
      </div>
    );
  }
}

export default App;