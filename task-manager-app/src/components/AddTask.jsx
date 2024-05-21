// AddTask.jsx
import React, { useEffect, useState } from 'react';
import { Container, Card, CardHeader, CardBody } from 'react-bootstrap';
import axios from 'axios';
import AddForm from './AddForm';

export default function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/tasks/${id}`);
      // Remove the deleted task from the list
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <>
      <Container className='mt-0'>
        <AddForm fetchTasks={fetchTasks} taskToEdit={taskToEdit} />
        <Card>
          <CardHeader className='bg-secondary text-white'>
            <h4>
              Task List
              <button
                className='btn btn-primary text-white float-end'
                data-bs-toggle="modal"
                data-bs-target="#add-task"
                onClick={() => setTaskToEdit(null)} // Clear taskToEdit when opening the modal
              >
                <span className='bi bi-plus'></span> Add Task
              </button>
            </h4>
          </CardHeader>
          <CardBody className='p-5'>
            <table className='table table-responsive table-striped table-hover table-bordered'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Priority</th>
                  <th>Assign To</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={task.id}>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td>{task.priority}</td>
                    <td>{task.assignTo}</td>
                    <td>
                      <button type='button' className='border border-0'>
                        <span className='bi bi-pencil text-dark fs-5' onClick={() => editTask(task)}></span>
                      </button>
                      <button
                        type='button'
                        className='border border-0'
                        onClick={() => deleteTask(task.id)}
                      >
                        <span className='bi bi-trash text-dark fs-5 ms-1'></span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
