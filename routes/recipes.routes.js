
import {Router} from "express";
import { addRecipe, getRecipe, getRecipes , patchRecipe, deleteRecipe} from "../controllers/recipes.controller.js";

export const router = Router()



// Define routes 
router.post('/', addRecipe )

router.get('/',  getRecipes)

router.get('/:id', getRecipe)

router.patch('/:id', patchRecipe)

router.delete('/:id',  deleteRecipe)


