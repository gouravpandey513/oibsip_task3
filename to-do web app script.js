let pendingList = document.getElementById('pendingList');
let completedList = document.getElementById('completedList');
let taskInput = document.getElementById('taskInput');

function addTask() {
  let taskText = taskInput.value;
  if (taskText.trim() !== '') {
    let date = new Date();
    let task = {
      text: taskText,
      timestamp: date.toLocaleString(),
      completed: false
    };
    displayTask(task);
    taskInput.value = '';
  }
}

function displayTask(task) {
  let listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${task.text}</span>
    <span class="timestamp">Added: ${task.timestamp}</span>
    <button onclick="markAsComplete(this)">Complete</button>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  if (task.completed) {
    listItem.classList.add('completed');
    completedList.appendChild(listItem);
  } else {
    pendingList.appendChild(listItem);
  }
}

function markAsComplete(button) {
  let listItem = button.parentNode;
  let taskText = listItem.querySelector('span').textContent;
  let timestamp = listItem.querySelector('.timestamp').textContent;

  let completedItem = document.createElement('li');
  completedItem.innerHTML = `
    <span>${taskText}</span>
    <span class="timestamp">Completed: ${timestamp}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  completedItem.classList.add('completed');
  completedList.appendChild(completedItem);
  listItem.remove();
}

function editTask(button) {
    let listItem = button.parentNode;
    let taskText = listItem.querySelector('span').textContent;
    let timestamp = listItem.querySelector('.timestamp').textContent;
  
    let newText = prompt('Edit Task', taskText);
    if (newText !== null && newText.trim() !== '') {
      listItem.querySelector('span').textContent = newText;
      listItem.querySelector('.timestamp').textContent = timestamp.replace(taskText, newText);
    }
  }
  
  function deleteTask(button) {
    let listItem = button.parentNode;
    let list = listItem.parentNode;
    list.removeChild(listItem);
  }
  
