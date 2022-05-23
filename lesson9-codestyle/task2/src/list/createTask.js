import { renderTasks } from './renderer';
import { setItem } from './storage';
import { createTask, getTasksList } from './tasksGateway';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1 Preparer data
// 2 Write data to date base
// 3 Read new data from server
// 4 Save new data to front-end storage
// 5 Update UI based on new data
