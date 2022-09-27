<template>
    <main>
        <h1>Main</h1>
    </main>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Main',
        data: function() {
            return {
                posts: [],
                activePage: 1,
            }
        },
        methods: {
            getPosts(){
                axios.get('/api/posts')
                    .then(response => {
                        this.posts = response.data.results.data
                        console.log(this.posts);
                    }) 
                    .catch(error => {
                        console.log(error);
                    })
            },
        },
        created(){
            this.getPosts()
        }
    }
    
</script>

<style>

</style>