//DB information
const getDbInfo= async()=>{
    return await Recipe.findAll({
        include: {
            model: Diets,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

module.exports= getDbInfo;