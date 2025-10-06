<template>
  <div v-if="posts.length > 0">
    <strong>Список постов</strong>
    <post-item 
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else>Список пуст</h2>
</template>

<script>
  import PostItem from '@/components/PostItem.vue'; 

  export default {
    props: {
      posts: {
        type: Array,
        required: true,
      }
    },
    components: {
      PostItem,
    }
  }
</script>