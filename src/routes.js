import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import CreateArticle from "./components/CreateArticle"


export const routes = [
  { path: '/', component: Home },
  { path: '*', redirect: '/' },
  { path: '/login', component: Login,  },
  { path: '/register', component: Register },
  { path: '/createarticle', component: CreateArticle }
  
]