'use strict';

const toDoList = {
    tasks: [],
    sortOrder: 'asc',
    addTask: function (title, priorityNum) {
        const { tasks } = this;
        let resId = 0;
        if (tasks.length === 0) {
            resId++;
        } else {
            resId = this.tasks.at(-1).id + 1;
        }
        tasks.push({
            title,
            id: resId,
            priorityNum,
        });
        return tasks;
    },
    deleteTask: function (id) {
        this.tasks.forEach((elem, index) => {
            if (elem.id === id) {
                this.tasks.splice(index, 1);
            }
        })
        return this.tasks;
    },
    changeTask: function (idTask, titleTask, priorityNumTask) {
        let taskFound = false;
        for (let el of this.tasks) {
            if (el.id === idTask) {
                el.title = titleTask;
                el.priorityNum = priorityNumTask;
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
                comparison = a.priorityNum - b.priorityNum;
            }
            return this.sortOrder === 'asc' ? comparison : -comparison;
        });
    }
}

toDoList.addTask('Помыть посуду', 2);
toDoList.addTask('Помыть Жопу', 2);
toDoList.addTask('Помыть Жопу', 2);
toDoList.addTask('Помыть Жопу', 2);
toDoList.addTask('Помыть Жопу', 2);
toDoList.deleteTask(3);
toDoList.addTask('Помыть Жопу', 2);
toDoList.deleteTask(2);
toDoList.addTask('Помыть Жопу', 2);
toDoList.addTask('Помыть Жопу', 2);
toDoList.addTask('Помыть Жопу', 2);
toDoList.changeTask(4, 'Выбрать новый ноутбук', 4);
toDoList.changeTask(5, 'Съездить на дачу и пожарить шашлыки', 1);
toDoList.sortTasks('priorityNum');
toDoList.sortTasks('priorityNum');




console.log(toDoList.tasks);





