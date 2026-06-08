import React, { useState } from "react";

const Todolist = () => {

    // useStates
    const [taskInputValue, setTaskInputValue] = useState("");
    const [itemsLeft, setItemsLeft] = useState(0);
    const [tasks, setTasks] = useState([]);

    const addTask = (ev) => {
        if (ev.key === "Enter") {
            if (tasks.includes(taskInputValue)) return;
            setTasks([...tasks, taskInputValue]);
            setTaskInputValue("");
            setItemsLeft(itemsLeft + 1);
        }
    }

    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((task, index) => index != indexToRemove));
        setItemsLeft(itemsLeft - 1);
    }

    const tasksList = tasks.map((task, index) => <li key={index} className="task">{task}<span className="close-button" onClick={() => removeTask(index)}><i class="fa-solid fa-trash-can"></i></span></li>)

    return (
        <div className="todo-list">
            <input type="text" onChange={(ev) => setTaskInputValue(ev.target.value)} onKeyDown={addTask} value={taskInputValue} placeholder="Insert your task" />
            <ul className="list">
                {tasksList}
            </ul>
            <span className="items-left">{itemsLeft >= 1 ? `${itemsLeft} items left` : "There is no available tasks, please add one"}</span>
        </div>
    )
}

export default Todolist;