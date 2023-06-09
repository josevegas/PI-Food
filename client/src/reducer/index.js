import { filterRecipesByOrigin } from "../actions";


const initialState={
    recipes: [],
    allRecipes: [],
    diets: [],
    details: [],
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
            const recipesDietApi= action.payload==='all'? state.allRecipes : state.recipes.filter(re=>re.diets.includes(action.payload));
            const recipeDietDb=action.payload==='all'? []: state.recipes.filter(re=>re.diets.includes({'name':action.payload}));
            return{
                ... state,
                recipes: recipesDietApi.concat(recipeDietDb),
            };
        break;
        case 'FILTER_BY_ORIGIN':
            const recipesOrigin=action.payload==='created'? state.recipes.filter(re=>re.createdByDB):state.recipes.filter(re=>!re.createdByDB)
            
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
        case 'RECIPES_BY_NAME':
            return{
                ... state,
                recipes: action.payload,
            };
        break;
        case 'POST_RECIPE':
            return{
                ... state,
            };
        break;
        case 'GET_DIETS':
            return{
                ... state,
                diets: action.payload,
            };
        break;
        case 'GET_DETAILS':
            return{
                ...state,
                details: action.payload,
            };
        break;
        default: return state;
    }
}

export default rootReducer;