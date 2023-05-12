require('dotenv').config();
const {YOUR_API_KEY}= process.env;
const axios=require('axios');
//API information
const getApiInfo= async ()=>{
    // const apiUrl= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}`);
    const apiUrl= await axios.get(`https://rickandmortyapi.com/api/character`);
    const apiInfo= await apiUrl.data.map(ch=>{
        return {
            id: ch.id,
            name: ch.name,
            img: ch.image,
        }
    });

}

module.exports= getApiInfo;