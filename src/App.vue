<script>
  import PostForm from '@/components/PostForm.vue';
  import PostList from '@/components/PostList.vue';

  export default {
    data() {
      return {
        posts: [
          {id: 1, title: 'JavaScript', body: 'Oписание поста'},
          {id: 2, title: 'JavaScript 2', body: 'Oписание поста 2'},
          {id: 3, title: 'JavaScript 3', body: 'Oписание поста 3'},
        ],
      }
    },
    components: {
      PostForm,
      PostList,
    },
    methods: {
      createPost(post) {
        this.posts = [...this.posts, post];
      }
    }
  }
</script>
  
<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList 
      :posts="posts"
    />
  </div>  
</template>

<style>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 .app {
  padding: 20px;
 }
</style>
