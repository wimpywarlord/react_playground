export const addTaskAction = (value) => {
    console.log(value);
    return {
        type: "ADD_TASK",
        payload: value,
    };
};
