const initialState = {
    tasks: [],
};

const addTaskReducer = (state = initialState, action) => {
    console.log(action.payload, "[AddtaskReducer.js]");
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };

        default:
            return {};
    }
};

export default addTaskReducer;
