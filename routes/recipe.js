const express = require ("express");
const { add, getAllRecipe, GetRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById } = require ("../controllers/recipe.js");
const { Authentication } = require ("../middleware/auth.js");

const router = express.Router();

// Create Recipe
router.post('/add',Authentication,add)

//Get All Recipe
router.get('/getAll',getAllRecipe)

//Get All Saved Recipe
router.get('/saved',getSavedRecipe)

//Get Recipe By Id
router.get('/:id',GetRecipeById)

//Get Recipe By User
router.get('/user/:id',getRecipeByUserId)

//saved Recipe By Id
router.post('/:id',Authentication,savedRecipeById)


module.exports = router;