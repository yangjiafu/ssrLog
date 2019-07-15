import {setCookie, getCookie, checkCookie} from "./cookie";

export default ( { app,req } ) => {
  app.router.beforeEach((to, from, next) => {
    // if(to.path == '/login/login' || req && req.headers && req.headers.cookie){
    //   next()
    // } else {
    //   next({name: 'login-login'})
    // }
    next();
  })
}
