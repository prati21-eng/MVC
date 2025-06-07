const express = require('express');
const router = express.Router();
const {postUser,getUsers,getUserByID,updateUserByID,deleteUserById} =require('../controller/userController');
router.route('/').post(postUser).get(getUsers)

router.route('/:id').get(getUserByID).patch(updateUserByID).delete(deleteUserById)


module.exports=router;