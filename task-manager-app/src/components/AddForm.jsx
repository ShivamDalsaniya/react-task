// AddForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddForm({ fetchTasks, taskToEdit }) {
  const [task, setTask] = useState({ id: null, name: '', priority: '', assignTo: '', date: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask({ id: null, name: '', priority: '', assignTo: '', date: '' });
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task.id) {
        await axios.put(`http://localhost:4000/tasks/${task.id}`, task);
      } else {
        await axios.post('http://localhost:4000/tasks', task);
      }
      fetchTasks();
      setTask({ id: null, name: '', priority: '', assignTo: '', date: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className='modal fade' role='dialog' id='add-task'>
        <div className='modal-dialog'>
          <div className='modal-content p-5'>
            <h3>{taskToEdit ? 'Edit Task' : 'Add Task'} Form</h3>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className='form-group mt-2'>
                <input
                  type='text'
                  name='name'
                  value={task.name}
                  onChange={handleChange}
                  placeholder='Enter Task Name *'
                  className="form-control"
                  required
                />
              </div>

              <div className='form-group mt-2'>
                <select
                  name='priority'
                  value={task.priority}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Enter Task Priority *</option>
                  <option value="higher">Higher</option>
                  <option value="lower">Lower</option>
                </select>
              </div>

              <div className='form-group mt-2'>
                <select
                  name='assignTo'
                  value={task.assignTo}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Assign To</option>
                  <option value="tl">TL</option>
                  <option value="manager">Manager</option>
                </select>
              </div>

              <div className='form-group mt-2'>
                <input
                  type='date'
                  name='date'
                  value={task.date}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className='form-group mt-2'>
                <input type='submit' value={taskToEdit ? 'Update Task' : 'Add Task'} className="btn btn-lg btn-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
