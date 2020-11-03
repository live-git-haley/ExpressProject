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
    user: { email: "", password: ""},
    users: [],
    email: '',
    newPass: '',
    numberOfUsers: 0,
    render : '',
    updateUser: '',
    currentUser: {},
    password1: '',
    password2: '',
    loggedIn: false,
    page: 'Home'
  }

  changePage(page) {

    
    switch(page) {
      case 'Home':
        return <HomePage 
        onChangeForm2 = {this.onChangeForm2}
        checkLogin = {this.checkLogin}
        onChangeForm3 = {this.onChangeForm3}
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
         case "LogOut":
        //   this.setState({
        //     currentUser: {}
        // });
          return <HomePage 
          onChangeForm2 = {this.onChangeForm2}
          checkLogin = {this.checkLogin}
          >
          </HomePage>;
      default:
        return <HomePage 
        onChangeForm2 = {this.onChangeForm2}
        checkLogin = {this.checkLogin}
        onChangeForm3 = {this.onChangeForm3}
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
   console.log("User passed from state" + this.state.user);
    let valid = this.checkUser();
    if(valid){
      createUser(this.state.user)
        .then(response => {
          console.log(response);
      });

      this.setState({page: 'Home'})
  }
  else{
    alert("Passwords must match..");
  }
}


  checkUser = (e) => {
   let pass1 = this.state.password1;
   let user1 = this.state.user
   let pass2 = this.state.password2;
   if(pass1 === pass2){
     user1.email = this.state.email;
     user1.password = this.state.password1;
     
     console.log("State email: " + JSON.stringify(user1));

    return true;
   }

   return false;

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

onChangeForm3 = (e) => {
  let user = this.state.user

 if (e.target.name === 'newPass') {
      this.setState({newPass: e.target.value});
  } 
  console.log("NEW PASSWORD RETRIEVED >>> " + this.state.newPass)
  user.password  = this.state.newPass;

  this.setState({user})
  
}


 

  onChangeForm = (e) => {
      let user = this.state.user
      if(e.target.name=== "email"){
      
        this.setState({email: e.target.value})
      }
      
      if(e.target.name=== "pass1"){

        this.setState({password1: e.target.value})
      
      }
      if(e.target.name=== "pass2"){
    
        this.setState({password2: e.target.value})
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
        <button type="button" onClick={(event) => this.handleClick(event, 'LogOut')} className="btn btn-success">Logout</button>

      </div>
    );
  }
}

export default App;



// if (e.target.name === 'email') {
//   user.email = e.target.value;
  
// } else if (e.target.name === 'password') {
//   console.log("In the IFF Statement")
//   console.log(e.target.getAttribute("password"));
//   user.password = e.target.value;

//   if(password === password2){
//     console.log("Passwords match");
//   }
//   else{
//     console.log("Passwords do not match");
//   }
// }
// else if(e.target.name === "newPass"){
// console.log("NEw Password >>>> " + e.target.value)

// } 