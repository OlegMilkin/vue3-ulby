<script>
  import PostForm from '@/components/PostForm.vue';
  import PostList from '@/components/PostList.vue';
  import axios from 'axios';
  import MyInput from '@/components/UI/MyInput.vue';

  export default {
    data() {
      return {
        dialogVisible: false,
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'}
        ],
        
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
      }
    },
    components: {
      PostForm,
      PostList,
    },
    methods: {
      createPost(post) {
        this.posts = [...this.posts, post];
        this.dialogVisible = false;
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog() {
        this.dialogVisible = true
      },
      async fetchPosts() {
        try {
          this.isPostsLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = response.data;
        } catch {
          alert('Oшибка')
        } finally {
          this.isPostsLoading = false;
        }
      },
      async loadMorePosts() {
        try {
          this.page += 1;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = [...this.posts, ...response.data];
        } catch {
          alert('Oшибка')
        }
      },
      // changePage(pageNumber) {
      //   this.page = pageNumber;
      // }
    },
    mounted() {
      this.fetchPosts();
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        })
      },
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    watch: {
      // page() {
      //   this.fetchPosts();
      // }
    }
  }
</script>
  
<template>
  <div>
    <div class="app-head">
      <MyInput v-model="searchQuery" placeholder="...Поиск" />
      <my-button @click="showDialog">
        Cоздать пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      ></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list 
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идёт загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div class="page__wrapper">
      <div 
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>  
</template>

<style>

 .app-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
 }

 .page__wrapper {
  display: flex;
  margin-top: 15px;
 }

 .page {
  border: 1px solid black;
  padding: 5px;
 }
 .current-page {
  border: 2px solid teal;
 }
 .observer {
  height: 30px;
  background: green;
 }
</style>
