require('dotenv').config();
const {API_KEY}= process.env;
const axios=require('axios');
//API information
const getApiInfo= async ()=>{
    const apiUrl= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}`);
    const apiInfo= await apiUrl.data;
    const apiRecipes=apiInfo.results.map()
}

module.exports= getApiInfo;