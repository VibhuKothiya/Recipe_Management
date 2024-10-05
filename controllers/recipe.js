const {Recipe} = require( "../models/Recipe.js");
const {SavedRecipe} = require("../models/SavedRecipe.js");

 const add = async(req,res)=>{
    const{title,ingredients,instructions,cusinetype,author,image}=req.body

    try {
        const recipe = await Recipe.create({
            title,ingredients,instructions,cusinetype,author,image,user:req.user,
        });
        res.json({message:"Recipe Created Succesfuly",recipe})
    } catch (error) {
        res.json({message:error})
    }
}

 const getAllRecipe = async(req,res)=>{
    const recipe = await Recipe.find();
    res.json({recipe})
}

 const GetRecipeById = async(req,res)=>{
    const id = req.params.id

    try {
        let recipe = await Recipe.findById(id)

        if(!recipe) res.json({  message:'recipe not exist'  })
            res.json({recipe})
    } catch (error) {
        res.json({message:error})
    }
}

 const getRecipeByUserId = async (req,res)=>{
    const userId = req.params.id

    try {
        let recipe = await Recipe.find({user:userId})

        if(!recipe) res.json({  message:'recipe not exist'  })
            res.json({message:"recipe by UserId", recipe})
    } catch (error) {
        res.json({message:error})
    }
}

 const savedRecipeById = async (req,res)=>{
    const id = req.params.id

    let recipe = await SavedRecipe.findOne({recipe:id})

    if(recipe) return res.json({message:"Recipe Already Exist"})

    recipe = await SavedRecipe.create({recipe:id})

    res.json({message:"Recipe saved Succefully"})
}

 const getSavedRecipe = async (req,res)=>{
    const recipe = await SavedRecipe.find()

    res.json({recipe})
}

module.exports = {getAllRecipe,add,GetRecipeById,getRecipeByUserId,savedRecipeById,getSavedRecipe}