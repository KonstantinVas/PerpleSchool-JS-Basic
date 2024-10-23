'use strict';

const toDoList = {
    tasks: [],
    sortOrder: 'asc',
    addTask: function (obj) {
        const { name, description, order } = obj;
        let resId = 0;
        if (this.tasks.length === 0) {
            resId++;
        } else {
            resId = this.tasks.at(-1).id + 1;
        }
        this.tasks.push({
            id: resId,
            name,
            description,
            order,
        });
        return this.tasks;
    },
    deleteTask: function (id) {
        this.tasks.forEach((elem, index) => {
            if (elem.id === id) {
                this.tasks.splice(index, 1);
            }
        })
        return this.tasks;
    },
    changeTask: function ({ id, name, description, order }) {
        let taskFound = false;
        for (let el of this.tasks) {
            if (el.id === id) {
                el.name = name;
                el.description = description;
                el.order = order;
                taskFound = true;
                console.log('Задача изменена');
                break;
            }
        }
        if (!taskFound) {
            console.log('Нет такой задачи');
        }
    },
    sortTasks: function (item) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';

        return this.tasks.sort((a, b) => {
            let comparison = 0;

            if (item === 'id') {
                comparison = a.id - b.id;
            }
            if (item === 'priorityNum') {
                comparison = a.order - b.order;
            }
            return this.sortOrder === 'asc' ? comparison : -comparison;
        });
    }
}

const newTask = {
    tasks: [{
        id: 1,
        name: 'тест',
        description: 'описание',
        order: 0
    }],
    sortOrder: 'asc'
}

const addNewTasks = toDoList.addTask.bind(newTask);
const deleteNewTasks = toDoList.deleteTask.bind(newTask);
const changeNewTasks = toDoList.changeTask.bind(newTask);
const sortNewTasks = toDoList.sortTasks.bind(newTask);

addNewTasks({ name: 'Ведро', description: 'Новое ведро', order: 3 });
addNewTasks({ name: 'Ведро', description: 'Новое ведро', order: 3 });
addNewTasks({ name: 'Ведро', description: 'Новое ведро', order: 3 });
addNewTasks({ name: 'Накачать колесо', description: 'Колесо лежит на верхней полке', order: 6 });
deleteNewTasks(2);
changeNewTasks({ id: 1, name: 'Тазик', description: 'Старый тазик', order: 3 })
sortNewTasks('id');
sortNewTasks('id');

console.log(newTask.tasks)

