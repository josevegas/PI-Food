require('dotenv').config();
const {API_KEY}= process.env;
const axios=require('axios');
//API information
const getApiInfo= async()=>{
    const apiUrl= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`);
    const apiInfo= await apiUrl.data.map(ele=>{
        return {
            id: ele.id,
            name: ele.title,
            image: ele.image,
            summary: ele.summary,
            healthScore: ele.healthScore,
            stepToStep: ele.analyzedInstructions.steps.map(ele=>ele.step),
            diets: ele.diets.map(ele=>ele),
        };
    });
    return apiInfo;
};

module.exports= getApiInfo;