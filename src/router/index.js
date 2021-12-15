import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue' 
import BlogPost from '../views/BlogPost.vue'
import Pagination from '../views/Pagination.vue'


const routes = [
  {
    path: '/posts',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
      path: '/blog/:id',
      name: 'blog-post',
      component: BlogPost
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
