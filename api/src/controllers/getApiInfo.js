require('dotenv').config();
const {YOUR_API_KEY}= process.env;
const axios=require('axios');
//API information
const getApiInfo= async ()=>{
    const apiUrl= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${YOUR_API_KEY}&number=100`);
    const apiInfo= await apiUrl.data;
    const apiRecipes=apiInfo.results.map(re=>{
        let infoStep;
        if(Object.entries(re.analyzedInstructions).length){infoStep=re.analyzedInstructions[0].steps.map(st=>st.step)}else{infoStep=[]}
        return{
            id: re.id,
            name: re.title,
            image: re.image,
            summary: re.summary,
            healthScore: re.healthScore,
            steps: infoStep,
            diets: re.diets,
        }
    });
    return apiRecipes;
}

module.exports= getApiInfo;