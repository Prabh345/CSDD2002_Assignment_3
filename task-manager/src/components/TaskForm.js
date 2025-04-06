// 1st part 
// import { useState } from "react";

// const TaskForm = ({ addTask }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     addTask(title, description);
//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         placeholder="Task Title"
//       />
//       <textarea
//         value={description}
//         onChange={e => setDescription(e.target.value)}
//         placeholder="Task Description"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;
//2nd part 

// import { useState } from "react";

// const TaskForm = ({ addTask }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     addTask(title, description);
//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         placeholder="Task Title"
//       />
//       <textarea
//         value={description}
//         onChange={e => setDescription(e.target.value)}
//         placeholder="Task Description"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;



// import { useState } from "react";
// const TaskForm = ({ addTask }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     addTask(title, description);
//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         placeholder="Task Title"
//       />
//       <textarea
//         value={description}
//         onChange={e => setDescription(e.target.value)}
//         placeholder="Task Description"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;




// import { useState } from "react";

// const TaskForm = ({ addTask }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim() || !description.trim()) return;

//     addTask(title, description);
//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Task Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Task Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       ></textarea>
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;

//last part





import { useState, useRef, useEffect } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to hold the error message
  const titleInputRef = useRef(null); // Create a ref for the title input

  // Auto-focus input field when component mounts
  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if title or description is empty and set error message
    if (!title.trim() || !description.trim()) {
      setErrorMessage("Both title and description are required.");
      return;
    }

    // If valid, add the task and reset form fields
    addTask(title, description);
    setTitle("");
    setDescription("");
    setErrorMessage(""); // Clear any previous error message
    titleInputRef.current.focus(); // Re-focus after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskTitle">Task Title</label>
      <input
        id="taskTitle"
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleInputRef} // Attach ref to input field
      />

      <label htmlFor="taskDescription">Task Description</label>
      <textarea
        id="taskDescription"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      {/* Display error message if title or description is empty */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
