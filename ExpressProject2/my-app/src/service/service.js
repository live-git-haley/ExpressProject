export async function getAllUsers() {

    const response = await fetch('/api/v1/users/');
    return await response.json();
}

export async function deleteUser(email) {

  const response = await fetch('/api/v1/users/' + email,{ method: 'DELETE'});
  return await response.json();
}


export async function updateUser(email, newPassword) {
  console.log("The API CALL");
  console.log('/api/v1/users/' + email + '/' + newPassword);
  const response = await fetch('/api/v1/users/' + email + '/' + newPassword,{ method: 'PUT'});
  return await response.json();
}


export async function findUserbyEmail(email) {

  const response = await fetch('/api/v1/users/' + email);
  return await response.json();
}

export async function CheckPassword(inputtxt) 
{ 

  
var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/;
if(inputtxt.match(passw)) 
{ 

return 1;
}
else
{ 
alert('Please enter a valid password.')
return 0;
}
}

export async function createUser(data) {
 
   console.log(JSON.stringify({data}));
   console.log(data.password);
   console.log(CheckPassword(data.password));
 
  let result = await CheckPassword(data.password);
  if(result === 1){
  
    const response = await fetch(`/api/v1/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
      })
    return await response.json();
  alert('Congrats! You successfully added a new user to the db.')

  }


}

