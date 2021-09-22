import { TODO_ADDED, TODO_REMOVED } from "./actions.js";
import { pubsub } from "./pubsub.js";

export const todoList = {
    toDos: [],
    render: function (container) {
        const template = document.getElementById('listTemplate');
        const list = template.content.cloneNode(true);
        container.appendChild(list);

        const ul = document.querySelector('.list ul');
        ul.addEventListener('click', this.todoRemoved.bind(this));
        pubsub.subscribe(TODO_ADDED, this.todoAdded.bind(this));
    },
    todoAdded: function (todo) {
        const list = new Set(this.toDos);
        list.add(todo);
        this.toDos = Array.from(list).sort();

        const ul = document.querySelector('.list ul');
        ul.innerHTML = '';
        const df = document.createDocumentFragment();

        this.toDos.forEach(title => {
            let li = document.createElement('li');
            li.innerText = title;
            df.appendChild(li);
        });
        ul.appendChild(df);
    },
    todoRemoved: function (event) {
        const item = event.target.closest('li');
        const todo = item.textContent;
        this.toDos = this.toDos.filter(nm => nm !== todo);
        item.parentElement.removeChild(item);

        pubsub.dispatch(TODO_REMOVED, todo);
    }
};