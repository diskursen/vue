const app = Vue.createApp({

data() {
    return {
        title: 'the lotr 2',
        author: 'tolkien',
        age: 66,
    }


},
methods: {
    changeTitle() {
        this.title = 'de två tornen'

    }


}


})

app.mount('#app')