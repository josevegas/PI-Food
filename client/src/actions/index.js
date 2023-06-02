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