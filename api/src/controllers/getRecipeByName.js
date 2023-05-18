const getAllRecipes=require('./getAllRecipes.js');

const getRecipeByName= async (req, res)=>{
    const name=req.query.name;
    let allRecipes= await getAllRecipes();
    if(name){
        let recipesByName= await allRecipes.filter(re=>re.name.toLowerCase().includes(name.toLowerCase()));
        recipesByName.length?
        res.status(200).json(recipesByName):
        res.status(404).json({message:"Receta no encontrada."});
    }else{
        res.status(200).json(allRecipes)
    }
};

module.exports=getRecipeByName;