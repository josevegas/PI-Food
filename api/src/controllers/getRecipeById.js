require('dotenv').config();
const {YOUR_API_KEY}= process.env;
const axios=require('axios')

const getRecipeById=async (req, res)=>{
    const {idRecipe}=req.params;
    if(idRecipe){
        const apiUrl=await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${YOUR_API_KEY}&number=100`);
        let infoId= await apiUrl.data;
        if(infoId.hasOwnProperty('healthScore')){
            let infoStep;
            if(Object.entries(infoId.analyzedInstructions).length){infoStep=infoId.analyzedInstructions[0].steps.map(st=>st.step)}else{infoStep=[]}
            const recipeId={
                id: infoId.id,
                name: infoId.title,
                summary: infoId.summary,
                healthScore: infoId.healthScore,
                stepToStep: infoStep,
                diets: infoId.diets,
            };
            res.status(200).json(recipeId);
        }
        res.status(404).json({message: `Receta no encontrada.${Object.entries(infoId).length}`});
    }
}

module.exports=getRecipeById;