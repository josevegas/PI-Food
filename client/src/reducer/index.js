import { filterRecipesByOrigin } from "../actions";


const initialState={
    recipes: [],
    allRecipes: [],
}
function rootReducer(state=initialState,action){
    switch(action.type){
        case 'GET_RECIPES':
            return {
                ... state,
                recipes: action.payload,
                allRecipes: action.payload,
            };
        break;
        case 'FILTER_BY_DIET':
            const recipesDiet= action.payload==='all'? state.allRecipes : state.allRecipes.filter(re=>re.diets.includes(action.payload))
            return{
                ... state,
                recipes: recipesDiet,
            };
        break;
        case 'FILTER_BY_ORIGIN':
            const recipesOrigin=action.payload==='created'? state.allRecipes.filter(re=>re.createdInDb):state.allRecipes.filter(re=>!re.createdInDb)
            
            return{
                ... state,
                recipes: action.payload==='all'? state.allRecipes: recipesOrigin,
            }
        break;
        case 'ORDER_BY_NAME':
            let sortedRecipes= action.payload==='a-z'? state.recipes.sort(function (a,b){
                if(a.name>b.name){
                    return 1;
                }
                if(a.name<b.name){
                    return -1;
                }
                return 0;
            }): state.recipes.sort(function(a,b){
                if(a.name>b.name){
                    return -1;
                }
                if(a.name<b.name){
                    return 1;
                }
                return 0;
            })
            return{
                ... state,
                recipes: sortedRecipes,
            };
        break;
        case 'ORDER_BY_ID':
            const recipesId=action.payload==='asc'?state.recipes.sort(function(a,b){
                if(a.id>b.id){
                    return 1;
                }
                if(a.id<b.id){
                    return -1;
                }
                return 0;
            }): state.recipes.sort(function(a,b){
                if(a.id>b.id){
                    return -1;
                }
                if(a.id<b.id){
                    return 1;
                }
                return 0;
            })
            return{
                ... state,
                recipes: recipesId,
            };
        break;
        default: return state;
    }
}

export default rootReducer;