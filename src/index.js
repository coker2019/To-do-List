import './style.css';

const taskContainer = document.querySelector('.all-tasks');
const tasks = [
  {
    description: 'Make Breakfast',
    completed: false,
    id: 0,

  },
  {
    description: 'Clean the house',
    completed: false,
    id: 1,
  },
  {
    description: 'go to work',
    completed: false,
    id: 2,
  },
  {
    description: 'Join stand up team',
    completed: false,
    id: 3,
  },
];

tasks.forEach((task, e) => {
  const taskItem = document.createElement('div');
  taskItem.classList = 'list-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskDesc = document.createElement('input');
  taskDesc.type = 'text';
  taskDesc.value = `${tasks[e].description}`;

  const ellipses = document.createElement('button');
  ellipses.innerHTML = '<i class="uil uil-ellipsis-v"></i>';

  taskItem.append(checkbox);
  taskItem.append(taskDesc);
  taskItem.append(ellipses);

  taskContainer.append(taskItem);
  taskDesc.removeAttribute('disabled');
  taskDesc.focus();
});