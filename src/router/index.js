import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TeespaceView from '../views/TeespaceView.vue'
import ShopView from '../views/ShopView.vue'
import BlogView from '../views/BlogView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        titleKey: 'home'
      }
    },
    {
      path: '/teespace',
      name: 'teespace',
      component: TeespaceView,
      meta: {
        titleKey: 'teespace'
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
      meta: {
        titleKey: 'shop'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: {
        titleKey: 'blog'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        titleKey: 'about'
      }
    },
  ],
})

// router.afterEach((to) => {
//   document.title = to.meta.title
// })

export default router
