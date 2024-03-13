console.log('test');

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
    }
}).mount('#app');