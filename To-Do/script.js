'use strict';

//////////////////////////////////
// ---------- Variables ----------
//////////////////////////////////
const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const listEl = document.querySelector('#tasks');
let tasks = [];

//////////////////////////////////
// ---------- Functions ----------
//////////////////////////////////
const getTask = function () {
  // Read in new task
  let task = input.value;

  // Set task to placeholder if no task set
  if (!task) task = input.placeholder;

  return task;
};

const createTask = function (task) {
  // Create task element
  const taskEl = document.createElement('div');
  taskEl.classList.add('task');

  // Create task content
  const taskContentEl = document.createElement('div');
  taskContentEl.classList.add('content');

  taskEl.appendChild(taskContentEl);

  // Set task content to the input task
  const taskInputEl = document.createElement('input');
  taskInputEl.classList.add('text');
  taskInputEl.type = 'text';
  taskInputEl.value = task;

  taskContentEl.appendChild(taskInputEl);

  // Create delete button for each task
  const taskActionsEl = document.createElement('div');
  taskActionsEl.classList.add('actions');

  const taskDeleteEl = document.createElement('button');
  taskDeleteEl.classList.add('delete');
  taskDeleteEl.innerHTML = 'Delete';
  taskActionsEl.appendChild(taskDeleteEl);
  taskEl.appendChild(taskActionsEl);

  listEl.appendChild(taskEl);

  // reset input value
  input.value = '';

  // Delete task
  taskDeleteEl.addEventListener('click', function () {
    listEl.removeChild(taskEl);
  });
};

const saveTasks = function () {
  let taskList = [];
  tasks = document.querySelectorAll('.text');
  tasks.forEach(task => taskList.push(task.value));
  taskList.forEach((task, i) => localStorage.setItem(`task${i}`, task));
  if (taskList.length === 0) localStorage.clear();
};

const loadTasks = function () {
  const storageItems = [];
  for (let i = 0; i < localStorage.length; i++) {
    storageItems.push(localStorage.getItem(`task${i}`));
  }
  storageItems.forEach(task => {
    createTask(task);
  });
  localStorage.clear();
};

////////////////////////////////////////
// ---------- Event Listeners ----------
////////////////////////////////////////
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const task = getTask();

  createTask(task);
});

window.onbeforeunload = function () {
  saveTasks();
};

window.onload = function () {
  loadTasks();
};
