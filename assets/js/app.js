//console.log('test');

const { createApp } = Vue
createApp({
    data() {
        return {
            //message: 'Its working',
            newTask: '',
            tasks: [
                {
                    text: 'First task',
                    done: false
                },
                {
                    text: 'Second task',
                    done: true
                },
                {
                    text: 'Third task',
                    done: false
                }
            ]
        }
    },
    methods: {
        removeTask(taskId) {
            console.log('removing the task');
            this.tasks.splice(taskId, 1);
        },
        addTask() {
            console.log('adding new task');
            if (this.newTask.trim().length > 3) {
                this.tasks.push({ text: this.newTask, done: false });
            }
            this.newTask.text = '';
        }
    }
}).mount('#app');