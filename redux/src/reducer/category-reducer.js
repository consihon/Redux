export default ( state = {}, {type, payload} ) => {
    let updatedState=null;

    switch(type){
        case 'CATEGORY_CREATE':
            return {...state, [payload.id]: payload};
        case 'CATEGORY_UPDATE':
            let newState={...state};
            newState[payload.id]=payload;
            return newState;
        case 'CATEGORY_DELETE':
            updatedState ={...state};
            delete updatedState[payload.id];
            return updatedState;
        default:
            return state;
    }
};