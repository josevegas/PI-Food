import axios from 'axios';

export function getRecipes(){
    return async function (dispatch){
        var json= await axios.get("http://localhost:3001/recipes");
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data,
        })
    }
}
export function filterRecipesByDiet(payload){
    return {
        type: 'FILTER_BY_DIET',
        payload
    }
}
export function filterRecipesByOrigin(payload){
    return{
        type: 'FILTER_BY_ORIGIN',
        payload
    }
}
export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}
export function orderById(payload){
    return{
        type: 'ORDER_BY_ID',
        payload
    }
}
export function getRecipesByName(name){
    return async function(dispatch){
        try{
            var json=await axios.get(`http://localhost:3001/recipes?name=${name}`);
            return dispatch({
                type: 'RECIPES_BY_NAME',
                payload: json.data,
            })
        }catch(error){
            console.log(error)
        }
    }
}
export function getDiets(){
    return async function (dispatch){
        var json= await axios.get("http://localhost:3001/diets");
        return dispatch({
            type: 'GET_DIETS',
            payload: json.data,
        })
    }
}
export function postRecipes(payload){
    return async function(dispatch){
        var json=await axios.post('http://localhost:3001/recipes',payload);
    }
}
export function getDetails(id){
    return async function(dispatch){
        try{
            var json= await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json,
            })
        }catch(error){
            console.log(error)
        }
    }
}