import "./App.css";
import {
  Button,
  TextField,
  FormControlLabel,
  Switch,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskTable from "./components/TaskTable";

function App() {
  const [tasks, setTasks] = useState([]);
  const [incompleteOnly, setIncompleteOnly] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  /*
    PROBLEM 2: The addTask function. This is an EVENT HANDLER FUNCTION.

    !IMPORTANT! Do PROBLEM 1 first... find it by scrolling down or CTRL + F

    !IMPORTANT! After implementing addTask, make sure that when the
    <Button ...>Add Task</Button> is clicked, addTask is called.
    Use the onClick EVENT ATTRIBUTE.     

    Implement the following function. It should work as follows:

    IF there is a title (that is, title != the empty string OR title is true),
    - Create a new object called newTask defined as follows (fill in the ??):
      const newTask = {
        id: uuidv4(),
        title: ??
        description: ??
        completed: false // Task should start as NOT COMPLETED
        dueDate: ??
      } 
    - Use setTasks() to append the newTask to tasks
    - Use setTitle(), setDescription(), and setDueDate() to
      reset their respective state variables
    ELSE do nothing
  */
  const addTask = () => {
    // START EDITING
    // END EDITING
  };

  /*
    PROBLEM 3: The toggleCompletion function. This gets passed into the TaskTable and will be
    used to add functionality to clicking on the checkbox for a given task. 

    It should be implemented as follows:
    - Either use an updater function or just straight up map.
    - You should map over each task, and if its id === the id passed in, then use the spread
      operator to toggle the task's completion status (e.g. true -> false and false -> true)
    
    THIS SHOULD TAKE LIKE LESS THAN 5 MINUTES 
    HINT HINT NUDGE NUDGE: I'm getting some Week 4 HW flashbacks...are you?
  */
  const toggleCompletion = (id) => {
    // START EDITING
    // END EDITING
  };
  
  /*
    PROBLEM 4: The deleteTask function. This gets passed into the TaskTable and will be
    used to allow the deletion of a given task.

    It should be implemented as follows:
    - Either use an updater function or just straight up map.
    - Filter over the tasks, and only include the tasks whose ids are NOT equal to the
      id that was passed into deleteTask.

    THIS SHOULD TAKE LIKE LESS THAN 5 MINUTES 
    HINT HINT NUDGE NUDGE: I'm getting some Week 4 HW flashbacks...are you?
  */
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  
  /*
    PROBLEM 5: The calculateProgress function. Used to re-calculate the % of completed
    tasks on each render and update the progress bar above the task table. 

    It should be implemented as follows:
    - If the length of the tasks array is 0, just return 0. Don't want any divide by 0
      errors.
    - Create a const variable completedTaskCount, and calculate it by first filtering over
      the tasks to only include the completed tasks and then getting the length of the
      returned array.
    - return completedTasks / tasks.length * 100
  
    WHEN YOU ARE DONE, SET THE value PROP OF THE LinearProgress
    component to the result of calling calculateProgress.
  */
  const calculateProgress = () => {
    // START EDITING
    // END EDITING
  };

  return (
    <div id="main-container">
      <h1>Task Manager</h1>
      <div className="text-fields">
        {/* 
        PROBLEM 1: Linking TextFields to their corresponding state variables.

        For each of the three TextFields below:
        - Set the value prop equal to the title/description/dueDate state variable
        - Set the onChange prop equal to a function (e.g. an anonymous arrow f'n), where all
          it does is call setTitle/setDescription/setDueDate to the e.target.value. SEE THE SLIDE
          "Event handlers with a parameter" from class FOR MORE INFO.
        */}
        <TextField
          required
          label="Title"
        />
        <TextField
          label="Description"
        />
        <TextField
          label="Due Date"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained">
          Add Task
        </Button>
      </div>

      <FormControlLabel
        control={<Switch/>}
        label="Incomplete Tasks Only"
        onChange={() => {
          setIncompleteOnly(!incompleteOnly);
        }}
        componentsProps={{ typography: { variant: "p" } }}
      />
      <LinearProgress
        variant="determinate"
        sx={{ width: "100%", height: 10, borderRadius: 5, marginBottom: 2 }}
      />
      <TaskTable 
        tasks={incompleteOnly ? tasks.filter((task) => !task.completed) : tasks } 
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
