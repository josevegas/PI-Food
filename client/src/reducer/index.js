

const initialState={
    recipes: []
}
function rootReducer(state=initialState,action){
    switch(action.type){
        case 'GET_RECIPES':
            return {
                ... state,
                recipes: action.payload,
            };
        break;
        default: return state;
    }
}

export default rootReducer;