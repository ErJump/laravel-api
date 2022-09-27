<template>
    <main class="py-5">
        <div class="container-lg">
            <label class="d-block" for="titleSearch">Title filter</label>
            <input name="titleSearch" type="text" v-model="titleParameter">
            <div @click="getFilteredPosts()" class="btn btn-primary d-inline">Search</div>
            <div class="row my-4 justify-content-center">
                <PostCard v-for="post in posts" :key="post.id" :post="post" />
            </div>
            <div class="d-flex align-items-center justify-content-around w-100">
                <div v-if="currentPage != 1" class="btn btn-primary" @click="getPrevPage()">Prev Page</div>
                <h5>{{currentPage}}</h5>
                <div class="btn btn-primary" @click="getNextPage()">Next Page</div>
            </div>  
        </div>
    </main>
</template>

<script>
    import axios from 'axios'
    import PostCard from './PostCard.vue'

    export default {
    name: "Main",
    components: { PostCard },
    data: function () {
        return {
            posts: [],
            currentPage: 1,
            nextPage: null,
            prevPage: null,
            titleParameter: '',
        };
    },
    methods: {
        getPosts() {
            axios.get("/api/posts")
                .then(response => {
                this.posts = response.data.results.data;
                this.prevPage = response.data.results.prev_page_url;
                this.nextPage = response.data.results.next_page_url;
                console.log(this.posts);
            })
                .catch(error => {
                console.log(error);
            });
        },
        getNextPage() {
            axios.get(this.nextPage)
                .then(response => {
                this.posts = response.data.results.data;
                this.currentPage++;
                this.nextPage = response.data.results.next_page_url;
                this.prevPage = response.data.results.prev_page_url;
                console.log(this.posts);
            })
                .catch(error => {
                console.log(error);
            });
        },
        getPrevPage() {
            axios.get(this.prevPage)
                .then(response => {
                this.posts = response.data.results.data;
                this.currentPage--;
                this.nextPage = response.data.results.next_page_url;
                this.prevPage = response.data.results.prev_page_url;
                console.log(this.posts);
            })
                .catch(error => {
                console.log(error);
            });
        },
        getFilteredPosts(){
            axios.get('/api/posts?title=' + this.titleParameter)
                .then(response => {
                this.posts = response.data.results.data;
                this.prevPage = response.data.results.prev_page_url;
                this.nextPage = response.data.results.next_page_url;
                console.log(this.posts);
            })
                .catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.getPosts();
    }, 
}
    
</script>

<style>

</style>