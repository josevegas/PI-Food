require('dotenv').config();
const {YOUR_API_KEY}= process.env;
const axios=require('axios')
const getAllRecipes=require('./getAllRecipes.js')

const getRecipeById=async (req, res)=>{
    const {idRecipe}=req.params;
    if(idRecipe){
        let infoId= await getAllRecipes();
        const recipeId= await infoId.filter(re=>re.id==idRecipe);
        res.status(200).json(recipeId);
        res.status(404).json({message: `Receta no encontrada.${Object.entries(infoId).length}`});
    }
}

module.exports=getRecipeById;