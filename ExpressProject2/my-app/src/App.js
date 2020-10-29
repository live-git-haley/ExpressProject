import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser, findUserbyEmail } from './service/service'
import { Login } from './components/Login';
import { LoggedIn } from './components/LoggedIn';
import HomePage from './components/HomePage';



class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
    render : '',
    updateUser: '',
    currentUser: {},
    loggedIn: false,
    page: 'Home'
  }

  changePage(page) {

    
    switch(page) {
      case 'Home':
        return <HomePage 
        onChangeForm2 = {this.onChangeForm2}
        checkLogin = {this.checkLogin}
        >
        </HomePage>;
        
      case 'Create':
        return <CreateUser 
        user={this.state.user}
        onChangeForm={this.onChangeForm}
        createUser={this.createUser}
        >
      </CreateUser>;

       case "LoggedIn":
         let user1 = this.state.currentUser;
         console.log("IN THE LOGGEN IN CASE, printing current state user >>> " + user1.email)
         return <LoggedIn
          user = {this.state.currentUser}
          showUsers = {this.showUsers}
          hideUsers = {this.hideUsers}

         /> 
      default:
        return <HomePage 
        onChangeForm2 = {this.onChangeForm2}
        checkLogin = {this.checkLogin}
        >
        </HomePage>;
    }
    
  }

  handleClick(event, newPage) {
    console.log(newPage)
    this.setState({
      page: newPage
    });

    // prevent reload of page caused by clicking links
  }


  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });

      this.setState({page: 'Home'})
  }

  
  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }
 
  checkLogin = (e) => {
    let user = this.state.user;
    let email = user.email;
    let password = user.password;
    findUserbyEmail(email)
      .then(userFound => {
        if(password === userFound[0].password){
          console.log("CORRECT")

          this.setState({currentUser: userFound[0]})
          this.setState({loggedIn: true})
          this.setState({page: "LoggedIn"})
        }
        else{
          alert("Wrong credentials")
        }
      });
    
     
  }

  onChangeForm2 = (e) => {
    let user = this.state.user
  
   if (e.target.name === 'email') {
        user.email = e.target.value;
    } else if (e.target.name === 'password') {
    
        user.password = e.target.value;
    }
    
   console.log("USER CREDENTIALS >>>")
   console.log(user.email)
   console.log(user.password)

    this.setState({user})
    
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
      else if(e.target.name === "newPass"){
        console.log("NEw Password >>>> " + e.target.value)

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

            <button type="button" onClick={(event) => this.handleClick(event, 'Create')} className="btn btn-success">Create User</button>

                {/* <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser> */}
            </div>
            <div className="col-md-4">
                {/* <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard> */}
            </div>
          </div>
        </div>

       
       
        {this.changePage(this.state.page)}
      </div>
    );
  }
}

export default App;