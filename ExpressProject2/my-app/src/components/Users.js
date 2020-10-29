import React from 'react'
import { useState } from 'react';

import { updateUser, createUser, deleteUser } from '../service/service'

export const Users = ({users, onChangeForm}) => {
    const [update, setUpdate] = useState(false);
    const [normal, setNormal] = useState(true);
    const [newPassword1, setPassword] = useState('');
    const [currUser, setCurrUser] = useState('');

    
    function deleteUser1(email){
     deletethisUser(email);

        sessionStorage.setItem("email",email)
      }

      function deletethisUser(email1){

        deleteUser(email1)
        .then(response => {
          console.log(response);
      });
      }

    function savePassword(e){
      console.log(newPassword1)
    }
    if (users.length === 0) return null
    const TableData = ({user}) => {
        console.log(user.email)
         return(
             <td>
            <form>
             <input type="text"  onChange={e => setPassword(e.target.value)} value = {newPassword1} className="form-control"  name="newPass" id="newPass" placeholder={user.password} />
             <button type="button" onClick={(e) => savePassword()}className="btn btn-success">Save</button>
             </form>
             </td>
         )
     }

     const TableData2 = ({user}) => {

        return(

            <td>        
                 <button type="button" onClick={(e) => setUpdate(true)}className="btn btn-success">Update</button>

                    </td>

        )
    }
     
    const UserRow = (user,index) => {
        // React.memo(setCurrUser(user))
       
        return(
           
        <  tr key = {index} className={index%2 === 0?'odd':'even'}>
            <td>{user.email}</td>
            <td> {user.password}</td>

             {update && <TableData user={user}></TableData>}
         {normal && <TableData2 user = {user}></TableData2>}

         <td>
             <button type="button" onClick={(e) => deleteUser1(user.email)} className="btn btn-danger">Delete</button></td> 

        </tr>
          )
    
}

   
    const userTable = users.map((user,index) => UserRow(user,index))

    return(
        <div className="container">
            <h2>Users in Database</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Emails</th>
                    <th>Passwords</th>
                    <th>Update</th>
                    <th>Delete</th>

         
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
     



    }




// const updateUserRow = (user,index) => {

//     return(
//           <tr key = {index} className={index%2 === 0?'odd':'even'}>

//                <td>
//                <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder={user.email} />
//                </td>
//               <td>{user.password}</td>
//               <td>        
//                    <button type="button" onClick={(e) => updateUser()}className="btn btn-success">Update</button>
//                 </td>
//                 <td>        
//                    <button type="button" className="btn btn-danger">Delete</button>
//                 </td>
             

//           </tr>
    
    
//       )
// }


