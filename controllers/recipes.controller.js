
import { recipeModel } from "../models/recipes.js";

export const addRecipe = async (req, res, next) => {
    try {
    
        // Add recipe to the database
        const createResult = await recipeModel.create(req.body);
        // return response ,
        res.status(201).json(createResult);
} catch (error) {
    // forward to express error handler
    next(error)
    
}
    
}


export const getRecipes = async (req, res, next) => {try {
    
    const findResult = await recipeModel.find({});
    res.json(findResult);
        
} catch (error) {
    next(error)  
}
}

export const getRecipe = async (req, res, next) =>  {try {
    
    const singleResult = await recipeModel.findById(req.params.id)
    res.json(singleResult);
} catch (error) {
    next(error)
}
    
}

export const patchRecipe = (req, res) => {
    res.send('patch single recipe');
    
}

export const deleteRecipe = (req, res) => {
    res.send('delete single recipe');
    
}