// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require('es6-promise').polyfill()
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Router from 'vue-router'
import store from './vuex/store'
import { Circle } from 'iview'
import 'iview/dist/styles/iview.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
require('vue-swipe/dist/vue-swipe.css')
import axios from 'axios'
import config from './../../../static/config.js'
// 智慧课堂—— 教师端
import wpjl from './skxx/wpjl'
import skxxlb from './skxx/skxx_lb'
import skxxpf from './skxx/skxx_pf'
import ktxq from './skxx/skxx_lb_ktxq'
import kjzl from './skxx/skxx_lb_ktxq_kjzl'
import dmjl from './skxx/skxx_lb_ktxq_dmjl'
import dmjlt from './dmjl/dmjl_teacher'
import ktpx from './skxx/skxx_lb_ktxq_ktpx'
import dmxq from './skxx/dmjl_dmxq'
import bjcy from './bjcy/bjcy'
// 智慧课堂—— 学生端
import wpjlstu from './skxxstu/wpjl'
import skxxlbstu from './skxxstu/skxxstu_lb'
import skxxpfstu from './skxxstu/skxxstu_pf'
import ktxqstu from './skxxstu/skxxstu_lb_ktxq'
import dmjls from './dmjl/dmjl_stu'
import kjzlstu from './skxxstu/skxxstu_lb_ktxq_kjzl'
import dmjlstu from './skxxstu/skxxstu_lb_ktxq_dmjl'
import ktpxstu from './skxxstu/skxxstu_lb_ktxq_ktpx'
Vue.use(Router)
Vue.use(Vuex)
// Vue.use(iView);
Vue.component('i-circle', Circle);
Vue.use(ElementUI);
Vue.use(MintUI);

global.COURSES = config
Vue.prototype.$axios = axios

Vue.use(require('vue-wechat-title'))
Vue.config.productionTip = false

let router = new Router({
  routes: [
    // 教师端
    {
      path: '/wpjl', name: 'wpjl', component: wpjl, meta:{title:"未评记录"}
    }, {
      path: '/skxxlb', name: 'skxxlb', component: skxxlb, meta:{title:"授课详情列表"}
    }, {
      path: '/skxxpf', name: 'skxxpf',component: skxxpf, meta:{title:"评分"}
    },{
      path: '/ktxq', name: 'ktxq',component: ktxq, meta:{title:"课堂详情"},redirect:'/ktxq/kjzl',
        children:[
          {path:'/ktxq/kjzl',component:kjzl,meta:{title:"课件资料"}},
          {path:'/ktxq/dmjl',component:dmjl,meta:{title:"点名记录"}},
          {path:'/ktxq/ktpx',component:ktpx,meta:{title:"课堂评分"}}
        ]
    },{
      path: '/bjcy', name: 'bjcy', component: bjcy,meta:{title:"班级成员"}
    },{
      path:'/dmxq',name:'/dmxq',component:dmxq,meta:{title:"点名详情列表"}
    },{
      path:'/dmjlt',name:'/dmjlt',component:dmjlt,meta:{title:"点名记录"}
    },
    // 学生端
    {
      path: '/wpjlstu', name: 'wpjlstu', component: wpjlstu, meta:{title:"未评记录"}
    }, {
      path: '/skxxlbstu', name: 'skxxlbstu', component: skxxlbstu, meta:{title:"授课详情列表"}
    }, {
      path: '/skxxpfstu', name: 'skxxpfstu',component: skxxpfstu, meta:{title:"评教"}
    },{
      path: '/ktxqstu', name: 'ktxqstu',component: ktxqstu, meta:{title:"课堂详情"},redirect:'/ktxqstu/kjzlstu',
        children:[
          {path:'/ktxqstu/kjzlstu',component:kjzlstu,meta:{title:"课件资料"}},
          {path:'/ktxqstu/dmjlstu',component:dmjlstu,meta:{title:"点名记录"}},
          {path:'/ktxqstu/ktpxstu',component:ktpxstu,meta:{title:"点名记录"}}
        ]
    },{
      path:'/dmjls',name:'/dmjls',component:dmjls,meta:{title:"点名记录"}
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if(sessionStorage.getItem("userinfo")){
    //返回上一页判断
      // if(to.name == './ktxq' || to.name == 'skxxpf' || to.name == 'ktxq/dmjl' || to.name =='/ktxq/kjzl' || to.name =='/ktxq/ktpx' || to.name == '/jbgl/jbgl_yxmb' || to.name =='/index'){
      //   if(store.getters.getTjstus){
      //      next()
      //       store.dispatch('set_tjstus', false);
      //   }else{
      //       router.push('/skxxlbstu')
      //       store.dispatch('set_tjstus', true);
      //   }
      // }else{
        next()
      // }
  }else{
    if( to.path == '/dmjls'|| to.path == '/dmjlt' || to.path == './wpjlstu' ||to.path == '/skxxlbstu'||to.path == '/dmxq'||to.path == '/bjcy'||to.path == '/skxxpf'||to.path == '/wpjl' || to.path == '/skxxlb' || to.path == '/ktxq/kjzl' || to.path == '/ktxq/dmjl' || to.path == '/ktxq/ktpx'){
      var userinfo = JSON.stringify(to.query); 
      sessionStorage.setItem("userinfo",userinfo)
      next();
    }else{
      alert("您的身份信息过期请重进！！！");
      axios.get('http://www.close.com');
    }
  }
})
// http://localhost:8080/index_mb#/skxxlb?userid=20050050&function_id=20150106&ticket=B81CB4FBA4DF8C121B158FE9996B0797&zhktid=762bdce965784d238b90a56ed6d67ff4
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
