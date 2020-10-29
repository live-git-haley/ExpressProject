import React from 'react'



const { Login } = require("./Login")




const HomePage = ({onChangeForm2, checkLogin }) => {


    return(
        <div className="container">
         <Login
                checkLogin = {checkLogin}
                onChangeForm2 = {onChangeForm2}
               
               > 
               

               </Login>
               
        </div>
    )
}

export default HomePage