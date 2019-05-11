/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const MyLoho = () => import('../pages/MyPlance/MyInfo.vue')

import Login from '../pages/Login/Login.vue'
import MyInfo from '../pages/MyPlance/MyInfo.vue'
import MyTarget from '../pages/MyPlance/MyTarget/MyTarget.vue'
import CompleteTarget from '../pages/MyPlance/CompleteTarget/CompleteTarget.vue'
import GiveUpTarget from '../pages/MyPlance/GiveUpTarget/GiveUpTarget.vue'
import MyQustion from '../pages/MyPlance/MyQustion/MyQustion.vue'
import ZhengNL from  '../pages/MSite/ZhengNL.vue'
import TargetProcess from  '../pages/MSite/TargetProcess.vue'
import Loho from  '../pages/MSite/LehoDT.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/myInfo',
      component: MyLoho,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      component: MSite,
      children: [
        {
          path: '/msite/zhengnengliang',
          component: ZhengNL,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/msite/targetProcess',
          component:TargetProcess,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/msite/loho',
          component: Loho,
          meta: {
            showFooter: true
          }
        },
        {
          path: '',
          redirect: '/msite/zhengnengliang'
        },
        ]
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/myInfo',
      component: MyInfo,
      children: [
        {
          path: '/my/myTarget',
          component: MyTarget,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/my/completeTarget',
          component: CompleteTarget,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/my/giveUpTarget',
          component: GiveUpTarget,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/my/qustion',
          component: MyQustion,
          meta: {
            showFooter: true
          }
        },
        {
          path: '',
          redirect: '/my/myTarget'
        },
      ]
    },
  ]
})
