import multer from "multer";
import {Router} from "express";
import { addRecipe, getRecipe, getRecipes , patchRecipe, deleteRecipe} from "../controllers/recipes.controller.js";

// configure upload(multer) middleware
const upload = multer( {dest: 'uploads'})


// create recipes router
export const router = Router()



// Define routes 
router.post('/', upload.single('image'), addRecipe )

router.get('/',  getRecipes)

router.get('/:id', getRecipe)

router.patch('/:id', patchRecipe)

router.delete('/:id',  deleteRecipe)


