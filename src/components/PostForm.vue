<template>
  <div>
    <strong>Cоздание поста</strong>
    <form class="form" @submit.prevent>
      <MyInput
        v-focus 
        placeholder="Название"
        v-model="post.title"
      />
      <MyInput 
        placeholder="Описание"
        v-model="post.body"
      />
       <MyButton 
        class="create-btn" 
        @click="createPost"
      >
        Создать
       </MyButton>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost() {  
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
  }
  .create-btn {
    margin-top: 15px;
    align-self: flex-end;
  }

</style>