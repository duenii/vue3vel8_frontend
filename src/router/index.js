import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'


// Import Views
// Frontend
import Home from '@/views/frontend/HomeView.vue'
import About from '@/views/frontend/AboutView.vue'
import Service from '@/views/frontend/ServiceView.vue'
import Contact from '@/views/frontend/ContactView.vue'
import Register from '@/views/frontend/RegisterView.vue'
import Login from '@/views/frontend/LoginView.vue'
import ForgotPassword from '@/views/frontend/ForgotPasswordView.vue'


// Backend

const routes = [
  {
    path:'/',
    name:'Home',
    component:FrontendLayout,
    children:[
      {
        path:'',
        component:Home
      }
    ]
  },
  {
    path:'/about',
    name:'About',
    component:FrontendLayout,
    children:[
      {
        path:'',
        component:About
      }
    ]
  
  },
  {
    path: '/service',
    name: 'Service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Service
      }
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Contact
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Register
      }
    ]
    
  },
  {
    path: '/login',
    name: 'Login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Login
      }
    ]
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: ForgotPassword
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
