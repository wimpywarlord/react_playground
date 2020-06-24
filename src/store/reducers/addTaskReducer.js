var initialState = ["asda", "asdasd", "Asdasd"];
console.log(...initialState, "*");

const addTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return "ASdsad";

        default:
            return {};
    }
};

export default addTaskReducer;
