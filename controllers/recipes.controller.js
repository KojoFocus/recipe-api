
import { recipeModel } from "../models/recipes.js";

export const addRecipe = async (req, res) => {

    // Add recipe to the database
    const createResult = await recipeModel.create(req,body);
    // return response ,
    res.json(createResult);
    
}


export const getRecipes = (req, res) => {
    res.send('get all recipes');
    
}

export const getRecipe = (req, res) => {
    res.send('get single recipe');
    
}

export const patchRecipe = (req, res) => {
    res.send('patch single recipe');
    
}

export const deleteRecipe = (req, res) => {
    res.send('delete single recipe');
    
}