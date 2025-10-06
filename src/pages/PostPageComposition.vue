<script>
  import PostForm from '@/components/PostForm.vue';
  import PostList from '@/components/PostList.vue';
  import MyInput from '@/components/UI/MyInput.vue';
  import usePosts from '@/hooks/usePosts.js';
  import useSortedPosts from '@/hooks/useSortedPosts.js';
  import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts.js';

  export default {
    data() {
      return {
        dialogVisible: false,
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'}
        ],
      }
    },
    components: {
      PostForm,
      PostList,
    },
    setup() {
      const {
        posts,
        totalPages,
        isPostsLoading
      } = usePosts(10);

      const {
        sortedPosts,
        selectedSort
      } = useSortedPosts(posts);

      const {
        searchQuery,
        sortedAndSearchedPosts
      } = useSortedAndSearchedPosts(sortedPosts);

      return {
        totalPages,
        isPostsLoading,
        selectedSort,
        searchQuery,
        sortedAndSearchedPosts
      }
    }
  }
</script>
  
<template>
  <div>
    <div class="app-head">
      <MyInput v-model="searchQuery" placeholder="...Поиск" />
      <my-button>
        Cоздать пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      ></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>
    <post-list 
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Идёт загрузка...</div>
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
