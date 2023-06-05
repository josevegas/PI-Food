const getApiInfo=require('./getApiInfo');
const getDbInfo=require('./getDbInfo');
//Concat
const getAllRecipes= async()=>{
    // const apiInfo= await getApiInfo();
    const dbInfo= await getDbInfo();
    // const totalInfo= apiInfo.concat(dbInfo);
    const totalInfo=dbInfo;
    return totalInfo;
}

module.exports= getAllRecipes;