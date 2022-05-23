const baseUrl = 'https://6281ec929fac04c6540b9efb.mockapi.io/api/v1/tasks';

export const getTasksList = () => fetch(`${baseUrl}`)
  .then(response => response.json())
  .then(tasks => tasks);

export const createTask = taskData => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = taskId => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
