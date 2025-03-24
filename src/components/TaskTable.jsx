import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

const TaskTable = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Due Date</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* 
        PROBLEM 6: This might take some time. Feel free to ask Gavin for help on this.
        Make each task map to a TableRow. Use this below as your template:
        <TableRow key={task.id}>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Checkbox
              />
            </TableCell>
            <TableCell>
              <DeleteIcon
                sx={{ color: red[500], "&:hover": { cursor: "pointer" } }}
              ></DeleteIcon>
            </TableCell>
        </TableRow>

        You will need to change/implement the following:
        - The first TableCell's value should be the task's title
        - The second TableCell's value should be the task's description
        - The second TableCell's value should be the task's dueDate
        - For the Checkbox add:
          - A checked prop equal to the task's completed field (true/false)
          - An onChange prop equal to an ANONYMOUS ARROW FUNCTION that calls toggleCompletion()
            with the task's id as a parameter
        - For the DeleteIcon:
          - Add a onClick prop and set it to an anonymous function that calls deleteTask with
            the task's id as a parameter.
        */}
        {tasks.map((task) => (
          <p>REPLACE ME WITH YOUR ANSWER</p>
        ))}
      </TableBody>
    </Table>
  );
};

export default TaskTable;
