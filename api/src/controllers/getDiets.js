require('dotenv').config();
const {YOUR_API_KEY}= process.env;
const axios=require('axios');
const {Diets}=require('../db.js');

const getDiets= async (req, res)=>{
    // const apiUrl=await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
    const apiUrl= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${YOUR_API_KEY}&number=100`);
    const dietsApi= apiUrl.data.results.map(re=> re.diets);
    const eachDiets= [];
    for(let i=0;i<dietsApi.length;i++){
        for(let j=0;j<dietsApi[i].length;j++){
            eachDiets.push(dietsApi[i][j]);
        }
    }
    eachDiets.forEach(di=>{
        Diets.findOrCreate({
            where: {name: di}
        })
    })
    const allDiets= await Diets.findAll();
    res.status(200).json(allDiets);
}

module.exports= getDiets;