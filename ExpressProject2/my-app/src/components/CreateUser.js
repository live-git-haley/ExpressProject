import React from 'react'


const CreateUser = ({onChangeForm, createUser }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create User</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="password" id="password" placeholder="password" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="password2" id="password2" placeholder="Confirm password" />
                        </div>
                    </div>
                 
                    <button type="button" onClick= {(e) => createUser()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser