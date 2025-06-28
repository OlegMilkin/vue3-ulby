<template>
  <div>
    <strong>Список постов</strong>
    <PostItem 
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
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