import { useState } from "react";

function ToDoList() { 

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) { 
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") { 
            /*ใช้ Spread Operator (...) เพื่อสร้าง Array ใหม่แทนการแก้ไข Array เดิม (.push)
            ช่วยให้ React ตรวจจับการเปลี่ยนแปลงและ Re-render ได้ถูกต้อง*/
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) { 
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) { 
        if (index > 0) { 
            const updatedTasks = [...tasks]; // Copy state ป้องกันการ Mutate โดยตรง
            /*สลับตำแหน่งข้อมูลใน Array แบบบรรทัดเดียว*/
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]]; 
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) { 

        if (index < tasks.length - 1) { 
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]]; 
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                onChange={handleInputChange}/>
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    /*ใส่ key เพื่อช่วยให้ React แยกแยะแต่ละ Item ในรายการได้ 
                    (ในงานสเกลใหญ่ควรจะใช้ Unique ID แทน Index 
                    เพื่อความแม่นยำในการแยกแยะแต่ละ Item)*/
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>)}
            </ol>
        </div>);
}
export default ToDoList