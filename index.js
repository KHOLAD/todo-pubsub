import { todoForm } from './form.js';
import { todoList } from './list.js';

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const aside = document.querySelector('aside');

    todoForm.render(main);
    todoList.render(aside);
});