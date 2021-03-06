'use strict';
const User = require('../models/user.model');
exports.findAll = function(req, res) {
User.findAll(function(err, user) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res',user);
  res.send(user);
});
};


exports.create = function(req, res) {
console.log("Body within the controller");
console.log(req.body.data.email);
const new_user = new User(req.body.data);

console.log(new_user);


//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
User.create(new_user, function(err, user) {
  if (err)
  res.send(err);
  res.json({error:false,message:"User added successfully!",data:user});
});

}
};

exports.findByEmail = function(req, res) {
User.findByEmail(req.params.email, function(err, user) {
  if (err)
  res.send(err);
  res.json(user);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    User.update(req.params.email, req.params.newPassword, function(err, user) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'User successfully updated' });
});
}
};
exports.delete = function(req, res) {
  console.log("Made it to the controller");
User.delete( req.params.email, function(err, user) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'User successfully deleted' });
});
};