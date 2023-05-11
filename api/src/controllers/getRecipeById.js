const getAllRecipes=require('./getAllRecipes')

const getRecipeById=async (req, res)=>{
    const {id}=req.params;
    const allRecipes= await getAllRecipes();
    if(id){
        let recipeId= await allRecipes.filter(re=>re.id.includes(id));
        recipeId.length?
        res.status(200).json(recipeId):
        res.status(404).json({message: 'Receta no encontrada'});
    }else{res.status(200).json(allRecipes)}
}

module.exports=getRecipeById;