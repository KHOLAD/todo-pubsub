import { todoForm } from './form.js';
import { todoList } from './list.js';
import { pubsub } from './pubsub.js';
import { TODO_ADDED } from './actions.js';

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const aside = document.querySelector('aside');

    todoForm.render(main);
    todoList.render(aside);

    const addTodo = todoList.todoAdded.bind(todoList);

    pubsub.subscribe(TODO_ADDED, addTodo);
});