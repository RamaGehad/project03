const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const counter = document.getElementById('counter');

let totalTasks = 0;

function updateCounter() {
  counter.textContent = totalTasks;
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === '') {
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    li.remove();
    totalTasks = totalTasks - 1;
    updateCounter();
  });

  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  totalTasks = totalTasks + 1;
  updateCounter();
  taskInput.value = '';
  taskInput.focus();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
