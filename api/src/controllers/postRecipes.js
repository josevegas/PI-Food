const{Recipe,Diets}=require('../db.js')

const postRecipes= async (req,res)=>{
    let{
        name,
        image,
        summary,
        healthScore,
        stepToStep,
        createByDb,
        diets,
    }=req.body;
    let recipeCreate=await Recipe.create({
        name,
        image,
        summary,
        healthScore,
        stepToStep,
        createByDb,
    })
    let dietsDb= await Diets.findAll({
        where: {name:diets}
    });
    recipeCreate.addDiets(dietsDb);
    res.status(201).json({message:'Receta creada con éxito.'})
};

module.exports=postRecipes;