import axios from 'axios';

export function getRecipes(){
    return async function (dispatch){
        var json= await axios.get("http://localhost:3001/recipes");
        if(json) console.log(json.data[0])
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data,
        })
    }
}