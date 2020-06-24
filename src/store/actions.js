export const addTaskAction = (task) => {
    console.log(task, "[Action.js]");
    return {
        type: "ADD_TASK_NOW",
        payload: task,
    };
};
