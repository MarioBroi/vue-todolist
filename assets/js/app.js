//console.log('test');

const { createApp } = Vue
createApp({
    data() {
        return {
            //message: 'Its working',
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
            this.tasks.splice(taskId, 1)
        }
    }
}).mount('#app');