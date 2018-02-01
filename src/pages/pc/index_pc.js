// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import config from './../../../static/config.js'
import index from './contain/index'
// 教学评价
import jxpj from './containRight/jxpj/index'
import jxpjstu from './containRight/jxpj/jxpj_student'
import jxpjtea from './containRight/jxpj/jxpj_teacher'
import jxpjdetail from './containRight/jxpj/jxpj_table_detail'
import studetail from './containRight/jxpj/jxpj_stu_xq'
import stugrdetail from './containRight/jxpj/jxpj_stu_grxq'
//课件资料
import kjzl from './containRight/kjzl/index'
// 点名记录
import dmjl from './containRight/dmjl/index'
import swith from './containRight/dmjl/dmjl_switcher'
import details from './containRight/dmjl/dmjl_details'
// 更多设置
import gdsz from './containRight/gdsz/index'
import zxsj from './containRight/gdsz/gdsz_zxsj'
import zxsjedit from './containRight/gdsz/gdsz_zxsj_edit'
import pjsj from './containRight/gdsz/gdsz_pjsj'
import dmsz from './containRight/gdsz/gdsz_dmsz'
import breadcrumb from './containRight/gdsz/gdsz_breadcrumb'
// 点名设置
import pxsz from './containRight/pxsz/index'
import jspx from './containRight/pxsz/pxsz_jspx'
import xspx from './containRight/pxsz/pxsz_xspx'

Vue.use(Router)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

global.COURSES = config 
const router = new Router({
  routes: [
    {
      path: '/pc', name: 'index',redirect:'/jxpj', component: index,children:[
        {
          path: '/jxpj', name: 'jxpj', component: jxpj,redirect:'/jxpj/jxpjtea',children:[
            {
              path: '/jxpj/jxpjstu', name: 'jxpjstu', component: jxpjstu
            },
             {
              path: '/jxpj/jxpjtea', name: 'jxpjtea', component: jxpjtea
            },
            {
              path: '/jxpj/jxpjdetail', name: 'jxpjdetail', component: jxpjdetail
            },
            {
              path: '/jxpj/studetail', name: 'studetail', component: studetail,children:[
                {
                  path: '/jxpj/stugrdetail', name: 'stugrdetail', component: stugrdetail
                }
              ]
            }
          ]
        },{
          path: '/kjzl', name: 'kjzl', component: kjzl
        },{
          path: '/dmjl', name: 'dmjl', component: dmjl,redirect:'/dmjl/swith',children:[
            {
              path: '/dmjl/swith', name: 'swith', component: swith
            },
            {
              path: '/dmjl/details', name: 'details', component: details
            }
          ]
        },{
          path: '/gdsz', name: 'gdsz',redirect:'/gdsz/zxsj' ,component: gdsz,children:[
            {
              path: '/gdsz/zxsj', name: 'zxsj', component: zxsj
            },
            {
              path: '/gdsz/breadcrumb', name: 'breadcrumb', component: breadcrumb 
            },
            {
              path: '/gdsz/pjsj', name: 'pjsj', component: pjsj
            },
            {
              path: '/gdsz/dmsz', name: 'dmsz', component: dmsz
            }
          ]
        },{
          path: '/pxsz', name: 'pxsz', component: pxsz,redirect:'/pxsz/jspx',children:[
              {
                path: '/pxsz/jspx', name: 'jspx', component: jspx
              },
              {
                path: '/pxsz/xspx', name: 'xspx', component: xspx
              }
          ]
        }
      ]
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if(sessionStorage.getItem("userinfo")){
//     //返回上一页判断
//       if(to.name == './ktxq' || to.name == 'skxxpf' || to.name == '/xxmb/xxmb_yjs' || to.name =='/mbgc/mbgc_zrs_tab' || to.name =='/jbgl/jbgl_xsmb' || to.name == '/jbgl/jbgl_yxmb' || to.name =='/index'){
//         if(store.getters.getTjstus){
//            next()
//             store.dispatch('set_tjstus', false);
//         }else{
//             router.push('/skxxlbstu')
//             store.dispatch('set_tjstus', true);
//         }
//       }else{
//         next()
//       }
//   }else{
//     if( to.name == './wpjlstu' ||to.path == '/skxxlbstu'||to.path == '/dmxq'||to.path == '/bjcy'||to.path == '/skxxpf'||to.path == '/wpjl' || to.path == '/skxxlb' || to.path == '/ktxq/kjzl' || to.path == '/ktxq/dmjl' || to.path == '/ktxq/ktpx'){
//       var userinfo = JSON.stringify(to.query); 
//       sessionStorage.setItem("userinfo",userinfo)
//       next();
//     }else{
//       alert("您的身份信息过期请从进！！！");
//       axios.get('http://www.close.com');
//     }
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
