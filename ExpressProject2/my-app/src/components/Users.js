import React from 'react'

export const Users = ({users, updateUser}) => {

    state = {

    }
    console.log('users length:::', users.length)
    if (users.length === 0) return null

    const UserRow = (user,index, update) => {
        
        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                   <td>{user.email}</td>
                  <td>
                  <input type="text"  className="form-control" name="password2" id="password2" placeholder={user.password} />
                  </td>
                  <td>        
                       <button type="button" onClick={(e) => updateUser()}className="btn btn-success">Update</button>
                    </td>
                    <td>        
                       <button type="button" className="btn btn-danger">Delete</button>
                    </td>
                 

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
