const express = require('express')
const router = express.Router()
const userController =   require('../controllers/user.controller');
// Retrieve all users
router.get('/', userController.findAll);
// Create a new user
router.post('/', userController.create);
// Retrieve a single user with id
router.get('/:email', userController.findByEmail);
// Update a user with id
router.put('/:email/:newPassword', userController.update);
// Delete a user with id
router.delete('/:email', userController.delete);
module.exports = router