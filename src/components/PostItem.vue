<template>
  <div class="post">
    <div>
      <strong>{{ post.title }}</strong>
      {{ post.body }}
    </div>
    <MyButton class="delete-btn">Удалить</MyButton>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        requared: true,
      }
    },
  }
</script>

<style scoped>
 .post {
    padding: 15px;
    border: 2px solid teal;
    display: flex;
    margin-top: 15px;;
    align-items: center;
 }

 .delete-btn {
  margin-left: auto;
 }
</style>
