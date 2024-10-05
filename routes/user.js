const express = require ( "express");
const { register,login, profile } = require ("../controllers/user")
const { Authentication } = require ("../middleware/auth");

const router = express.Router();

// user register
router.post('/register',register)
// user login
router.post('/login',login)
//Profile
router.get('/user',Authentication,profile)

module.exports = router;