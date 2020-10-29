
import React from 'react'
import { useState } from 'react';
import { getAllUsers } from '../service/service';
import { Users } from './Users';


export const LoggedIn = ({user}) => {
    const [render, setRender] = useState(false);
    const [allUsers, setUsers] = useState([]);



    function showUsers() {
        console.log("clicked...");
        setRender(true)
        getAllUsers()
          .then(users => {
            console.log(users)
            setUsers(users)
          });
      }
    

    function hideUsers()  {
        console.log("clicked...");
        setRender(false)
        
      }
      

    return(
        <div >
            <h4>Logged In!!</h4>
            <div className="number">
                Hello {user.email} , you are logged in 
            </div>
            <div className="row mrgnbtm">
            <button type="button" onClick={(e) => showUsers('show')} className="btn btn-warning">Show Users</button>
            <button type="button" onClick={(e) => hideUsers('show')} className="btn btn-primary">Hide Users</button>
           {render && <Users users= {allUsers} ></Users>
           
 
 }


        </div>

            </div>
        
    )
}
