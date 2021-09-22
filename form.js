import { TODO_ADDED } from "./actions.js";
import { pubsub } from "./pubsub.js";

export const todoForm = {
    render: function (container) {
        let template = document.getElementById('formTemplate');
        let form = template.content.cloneNode(true);
        form.querySelector('button').addEventListener('click', this.add);
        container.appendChild(form);
    },
    add: function (event) {
        event.preventDefault();
        const input = document.querySelector('.form input');
        pubsub.dispatch(TODO_ADDED, input.value);
        input.value = '';
    }
};