// //1st part//
// import { useState } from "react";
// import TaskForm from "./components/TaskForm";
// import './App.css';
// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (title, description) => {
//     const newTask = { id: Date.now(), title, description, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div>
//       <h1>Task Manager</h1>
//       <TaskForm addTask={addTask} />
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
//2nd part

// import { useState, useEffect } from "react";
// import TaskForm from "./components/TaskForm";
// import './App.css';

// const App = () => {
//   const [tasks, setTasks] = useState(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     return savedTasks ? JSON.parse(savedTasks) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     alert("Task list updated!");
//   }, [tasks]);

//   const addTask = (title, description) => {
//     const newTask = { id: Date.now(), title, description, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div>
//       <h1>Task Manager</h1>
//       <TaskForm addTask={addTask} />
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;



//3rd part
// import { useState, useEffect } from "react";
// import TaskForm from "./components/TaskForm";
// import './App.css';


// const App = () => {
//   const [tasks, setTasks] = useState(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     return savedTasks ? JSON.parse(savedTasks) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     alert("Task list updated!");
//   }, [tasks]);

//   const addTask = (title, description) => {
//     const newTask = { id: Date.now(), title, description, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div>
//       <h1>Task Manager</h1>
//       <TaskForm addTask={addTask} />
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


// import { useState } from "react";
// import { ThemeProvider, ThemeContext } from "./context/ThemeContext"; // Import ThemeContext
// import TaskForm from "./components/TaskForm";
// import "./App.css"; // Ensure styles are applied

// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (title, description) => {
//     const newTask = { id: Date.now(), title, description, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <ThemeProvider> {/* Wrap app inside ThemeProvider */}
//       <AppContent addTask={addTask} tasks={tasks} />
//     </ThemeProvider>
//   );
// };

// const AppContent = ({ addTask, tasks }) => {
//   return (
//     <ThemeContext.Consumer>
//       {({ theme, toggleTheme }) => (
//         <div className={`app ${theme}`}>  {/* Add dynamic class */}
//           <h1>Task Manager</h1>
//           <button onClick={toggleTheme}>Toggle Dark Mode</button> {/* Dark Mode Button */}
//           <TaskForm addTask={addTask} />
//           <ul>
//             {tasks.map(task => (
//               <li key={task.id}>
//                 <h3>{task.title}</h3>
//                 <p>{task.description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </ThemeContext.Consumer>
//   );
// };

// export default App;




// import { useReducer } from "react";
// import { taskReducer } from "./taskReducer";
// import TaskForm from "./components/TaskForm";
// import "./App.css"; // Ensure styles are applied

// const App = () => {
//   const [tasks, dispatch] = useReducer(taskReducer, []);

//   const addTask = (title, description) => {
//     dispatch({ type: "ADD_TASK", payload: { id: Date.now(), title, description, completed: false } });
//   };

//   return (
//     <div>
//       <TaskForm addTask={addTask} />
//     </div>
//   );
// };

// export default App;

// import { useReducer } from "react";
// import TaskForm from "./components/TaskForm";
// import { taskReducer } from "./taskReducer"; // Import the reducer
// import "./App.css";

// const App = () => {
//   const [tasks, dispatch] = useReducer(taskReducer, []);

//   // Function to Add Task
//   const addTask = (title, description) => {
//     dispatch({ type: "ADD_TASK", payload: { title, description } });
//   };

//   // Function to Delete Task
//   const deleteTask = (id) => {
//     dispatch({ type: "DELETE_TASK", payload: { id } });
//   };

//   // Function to Toggle Task Completion
//   const toggleComplete = (id) => {
//     dispatch({ type: "TOGGLE_COMPLETE", payload: { id } });
//   };

//   // Function to Update Task (If Implemented)
//   const updateTask = (id, title, description) => {
//     dispatch({ type: "UPDATE_TASK", payload: { id, title, description } });
//   };

//   return (
//     <div>
//       <h1>Task Manager</h1>
//       <TaskForm addTask={addTask} />
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//             <button onClick={() => updateTask(task.id, "Updated Title", "Updated Description")}>Edit</button>
//             <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import { useReducer, useState, useMemo } from "react";
// import TaskForm from "./components/TaskForm";
// import { taskReducer } from "./taskReducer";
// import "./App.css";

// const App = () => {
//   const [tasks, dispatch] = useReducer(taskReducer, []);
//   const [filter, setFilter] = useState("all"); // State to store filter type

//   // Function to Add Task
//   const addTask = (title, description) => {
//     dispatch({ type: "ADD_TASK", payload: { title, description } });
//   };

//   // Function to Delete Task
//   const deleteTask = (id) => {
//     dispatch({ type: "DELETE_TASK", payload: { id } });
//   };

//   // Function to Toggle Task Completion
//   const toggleComplete = (id) => {
//     dispatch({ type: "TOGGLE_COMPLETE", payload: { id } });
//   };

//   // 🟢 useMemo: Optimize Task Filtering
//   const filteredTasks = useMemo(() => {
//     console.log("Filtering tasks...");
//     return tasks.filter((task) => {
//       if (filter === "completed") return task.completed;
//       if (filter === "pending") return !task.completed;
//       return true; // "all" case
//     });
//   }, [tasks, filter]); // Only recompute if tasks or filter changes

//   return (
//     <div>
//       <h1>Task Manager</h1>
//       <TaskForm addTask={addTask} />

//       {/* Task Filter Dropdown */}
//       <label>Filter Tasks: </label>
//       <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//         <option value="all">All</option>
//         <option value="completed">Completed</option>
//         <option value="pending">Pending</option>
//       </select>

//       <ul>
//         {filteredTasks.map((task) => (
//           <li key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleComplete(task.id)}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


// //update task 7 - use callback

// import { useReducer, useState, useMemo, useCallback } from "react";
// import TaskForm from "./components/TaskForm";
// import { taskReducer } from "./taskReducer";
// import "./App.css";

// const App = () => {
//   const [tasks, dispatch] = useReducer(taskReducer, []);
//   const [filter, setFilter] = useState("all");

//   const addTask = (title, description) => {
//     dispatch({ type: "ADD_TASK", payload: { title, description } });
//   };

//   // 🟢 useCallback: Optimize Delete Task Function
//   const deleteTask = useCallback((id) => {
//     dispatch({ type: "DELETE_TASK", payload: { id } });
//   }, []);

//   // 🟢 useCallback: Optimize Toggle Task Completion Function
//   const toggleComplete = useCallback((id) => {
//     dispatch({ type: "TOGGLE_COMPLETE", payload: { id } });
//   }, []);

//   // 🟢 useMemo: Optimize Task Filtering
//   const filteredTasks = useMemo(() => {
//     console.log("Filtering tasks...");
//     return tasks.filter((task) => {
//       if (filter === "completed") return task.completed;
//       if (filter === "pending") return !task.completed;
//       return true;
//     });
//   }, [tasks, filter]);

//   return (
//     <div>
//       <h1>Task Manager</h1>
//       <TaskForm addTask={addTask} />

//       {/* Task Filter Dropdown */}
//       <label>Filter Tasks: </label>
//       <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//         <option value="all">All</option>
//         <option value="completed">Completed</option>
//         <option value="pending">Pending</option>
//       </select>

//       <ul>
//         {filteredTasks.map((task) => (
//           <li key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleComplete(task.id)}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


import { useReducer, useState, useMemo, useCallback } from "react";
import { taskReducer } from "./taskReducer";
import TaskForm from "./components/TaskForm";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext"; // Assuming ThemeContext is created
import "./App.css";

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState("all");

  // Add Task
  const addTask = (title, description) => {
    dispatch({ type: "ADD_TASK", payload: { title, description } });
  };

  // 🟢 useCallback: Optimize Delete Task Function
  const deleteTask = useCallback((id) => {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  }, []);

  // 🟢 useCallback: Optimize Toggle Task Completion Function
  const toggleComplete = useCallback((id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: { id } });
  }, []);

  // 🟢 useMemo: Optimize Task Filtering
  const filteredTasks = useMemo(() => {
    console.log("Filtering tasks...");
    return tasks.filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true; // "all" case
    });
  }, [tasks, filter]);

  return (
    <ThemeProvider> {/* Wrap app inside ThemeProvider */}
      <AppContent
        tasks={filteredTasks}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        filter={filter}
        setFilter={setFilter}
      />
    </ThemeProvider>
  );
};

const AppContent = ({ tasks, addTask, deleteTask, toggleComplete, filter, setFilter }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div className={`app ${theme}`}> {/* Add dynamic class for theme */}
          <h1>Task Manager</h1>
          <button onClick={toggleTheme}>Toggle Dark Mode</button> {/* Dark Mode Button */}
          <TaskForm addTask={addTask} />
          
          {/* Task Filter Dropdown */}
          <label>Filter Tasks: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>

          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default App;
