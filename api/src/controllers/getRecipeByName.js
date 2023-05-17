const getAllRecipes=require('./getAllRecipes.js');

const getRecipeByName= async (req, res)=>{
    const {name}=reg.query;
    let allRecipes= await getAllRecipes();
    if(name){
        let recipesByName= await allRecipes.filter(re=>re.name.toLowerCase().includes(name.toLowerCase()))
    }
};

module.exports=getRecipeByName;