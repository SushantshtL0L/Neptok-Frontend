const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');
const router = express.Router();

// GET all users
router.get('/users', getUsers);

// POST a new user
router.post('/users', createUser);

module.exports = router;