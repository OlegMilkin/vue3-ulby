import Main from '@/pages/Main.vue';
import PostPage from '@/pages/PostPage.vue';
import PostPageComposition from '@/pages/PostPageComposition.vue';
import PostIdPage from '@/pages/PostIdPage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },
  {
    path: '/posts-composition',
    component: PostPageComposition
  },
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;