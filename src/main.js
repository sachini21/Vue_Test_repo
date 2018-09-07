// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import router from './routes.js'
import VueResource from 'vue-resource';
import Auth from './plugins/Auth.js'

Vue.use(VueResource);
Vue.use(Auth);

alertify.defaults.notifier.position = "top-right";


//create the interceptor to call the server.To avoid calling the server every time
Vue.http.interceptors.push(function(request, next){
  if(request.url[0] === '/') {
    request.url = process.env.API + request.url;


    var token = Vue.auth.getToken();

    if(token){
      request.headers.set('Authorization' , 'Bearer' + token);
    }
  }

  next(function(res){
      if(res.status == 422){
          res.body.errors.forEach(function(e){
              alertify.error(e);
          });
      }
    });
});

//configure route guards
router.beforeEach(function (to, from, next){
  //prevent access to 'requiresGuest' routes;
    if(to.matched.some(function(record) { return record.meta.requiresGuest }) && Vue.auth.loggedIn()) {
      next({
          path: '/newsfeed',
          query: { redirect: to.fullpath }
      });
    }
    else if(to.matched.some(function(record) { return record.meta.requiresAuth }) && !Vue.auth.loggedIn()) {
        next({
            path: '/auth/login',
            query: { redirect: to.fullpath}
        });
    }
    else{
      next(); //make sure to always call next()
    }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
