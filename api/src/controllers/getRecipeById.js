const getAllRecipes=require('./getAllRecipes');
require('dotenv').config();
const {YOUR_API_KEY}= process.env;
const axios=require('axios')

const getRecipeById=async (req, res)=>{
    const {idRecipe}=req.params;
    if(idRecipe){
        const apiUrl=await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${YOUR_API_KEY}`);
        let infoId= await apiUrl.data;
        const recipeId={
            id: infoId.id,
            name: infoId.title,
            summary: infoId.summary,
            healthScore: infoId.healthScore,
            stepToStep: infoId.analyzedInstructions.steps,
        }
        //recipeId.length?
        res.status(200).json(recipeId);
        //res.status(404).json({message: `Receta ${idRecipe} no encontrada, ${recipeId.length}`});
    }
}

module.exports=getRecipeById;