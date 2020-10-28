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
User.findById = function (id, result) {
dbConn.query("Select * from user where id = ? ", id, function (err, res) {
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
dbConn.query("UPDATE user SET id=?,name=?, color = ? ,WHERE id = ?", [user.name, user.color ,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
User.delete = function(id, result){
dbConn.query("DELETE FROM user WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= User;