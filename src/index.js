import './style.css';
import { createMyTask } from './modules/Manager.js';

const createTask = document.getElementById('create');
const form = document.querySelector('form');
const formInput = document.querySelector('.input');

createTask.addEventListener('click', (e) => {
  e.preventDefault();
  const myTask = formInput.value;
  if (myTask) {
    createMyTask();
    form.reset();
  }
});
