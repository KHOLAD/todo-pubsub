export const todoList = {
    toDos: [],
    render: function (container) {
        let template = document.getElementById('listTemplate');
        let list = template.content.cloneNode(true);
        container.appendChild(list);
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
    }
};