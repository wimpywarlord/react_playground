let initialState = [];

const addTaskReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload];
        default:
            return state;
    }
};

export default addTaskReducer;
