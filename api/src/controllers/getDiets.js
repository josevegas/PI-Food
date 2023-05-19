require('dotenv').config();
const {YOUR_API_KEY}= process.env;
const axios=require('axios');
const {Diets}=require('../db.js');

const getDiets= async (req, res)=>{
    const apiUrl= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${YOUR_API_KEY}&number=100`);
    const dietsApi= apiUrl.data.results.map(re=> re.diets);
    const eachDiets= dietsApi.map(di=>{
        for(let i=0;i<=di.length;i++){
            if(!di[i]) di[i]='No diet'
            return di[i];
        }
    });
    console.log(eachDiets);
    eachDiets.forEach(di=>{
        Diets.findOrCreate({
            where: {name: di}
        })
    })
    const allDiets= await Diets.findAll();
    res.status(200).json(allDiets);
}

module.exports= getDiets;