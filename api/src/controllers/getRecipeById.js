const getAllRecipes=require('./getAllRecipes');
require('dotenv').config();
const {YOUR_API_KEY}= process.env;
const axios=require('axios');
const apiUrl=`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${YOUR_API_KEY}`;

const getRecipeById=async (req, res)=>{
    const {idRecipe}=req.params;
    if(idRecipe){
        let recipeId= await axios.get(apiUrl);
        recipeId.length?
        res.status(200).json(recipeId):
        res.status(404).json({message: 'Receta no encontrada'});
    }
}

module.exports=getRecipeById;