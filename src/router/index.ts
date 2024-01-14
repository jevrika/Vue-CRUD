import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import AddBook from '../views/AddBook.vue'
import EditBook from '../views/EditBook.vue'
import BookDetails from '../views/BookDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/books/:id',
    name: 'BookDetails',
    component: BookDetails,
    props: true,
  },
  
  {
    path: '/edit/books/:id',
    name: 'EditBook',
    component: EditBook,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
