export default (state={},{type,payload})=>{
    let updatedCards=null;
    let category=null;

    switch(type){
        case 'EXPENSE_CREATE':
            let cards = state[payload.categoryId];
            updatedCards = {...cards, [payload.id]:payload};
            return {...state,[payload.categoryId]: updatedCards};
        case 'EXPENSE_UPDATE':
            let newState = {...state};
            category = payload.categoryId;
            newState[category][payload.id]=payload;
            return newState;
        case 'EXPENSE_DELETE':
            let updatedState ={...state};
            category = payload.categoryId;
            delete updatedState[category][payload.id];
            return updatedState;
        default:
            return state;
    }
};