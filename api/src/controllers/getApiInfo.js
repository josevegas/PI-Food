require('dotenv').config();
const {API_KEY}= process.env;
const axios=require('axios');
//API information
const getApiInfo= async ()=>{
    const apiUrl= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}`);
    const apiInfo= await apiUrl.data;
    const apiRecipes=apiInfo.results.map(re=>{
        return{
            id: re.id,
            name: re.title,
            summary: re.summary,
            healthScore: re.healthScore,
            steps: re.analyzedInstructions[0].steps.map(st=>st.step),
            diets: re.diets,
        }
    })
}

module.exports= getApiInfo;