<template>
  <div class="post">
    <strong>{{ post.title }}</strong>
    {{ post.body }}
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        requared: true,
      }
    }
  }
</script>

<style scoped>
 .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
 }
</style>
