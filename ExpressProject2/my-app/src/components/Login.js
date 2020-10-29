import React from 'react'

export const Login = ({checkLogin, onChangeForm2}) => {

    return(
    
    <div className="container">
    <div className="row">
        <div className="col-md-7 mrgnbtm">
        <h2>Login</h2>
        <form>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="text" onChange={(e) => onChangeForm2(e)}   className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="email" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="text" onChange={(e) => onChangeForm2(e)}  className="form-control" name="password" id="password" placeholder="password" />
                </div>

               
            </div>
         
            <button type="button" onClick= {(e) => checkLogin()} className="btn btn-danger">Login</button>
        </form>
        </div>
    </div>
</div>


    )


}