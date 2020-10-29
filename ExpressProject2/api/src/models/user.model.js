'use strict';
var dbConn = require('../../config/db.config');
//User object create
var User = function(user){
  this.email     = user.email;
  this.password     = user.password;
 
};
User.create = function (user, result) {

dbConn.query("INSERT INTO user set ?", user, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  
  //console.log(res.insertId);

  result(null, res.insertId);
}
});
};
User.findByEmail = function (email, result) {
dbConn.query("Select * from user where email = ? ", email, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
User.findAll = function (result) {
  console.log("Find all function");
dbConn.query("Select * from user", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Users : ', res);
  result(null, res);
}
});
};
User.update = function(id, user, result){
dbConn.query("UPDATE user SET password = ? ,WHERE id = ?", [id, user.password], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
User.delete = function(email, result){
  console.log("In the model function")
  console.log("DELETE FROM user WHERE email = " + email)
dbConn.query("DELETE FROM user WHERE email = ?", [email], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log(res);
  result(null, res);
}
});
};
module.exports= User;