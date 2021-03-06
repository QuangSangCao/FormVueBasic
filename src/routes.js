import Form from './components/Form.vue';
import Header from './components/Header.vue';
import Table from './components/Table.vue';
import hachi from './components/Hachi.vue';
import User from './components/User.vue';
import UserDetail from './components/UserDetail.vue';
import NotFound from './components/NotFound.vue';
import Footer from './components/Footer.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

export const routes = [
  {
    path: '/form',
    name: 'form',
    components: {
      default: Form,
      'header-top': Header,
      'header-bottom' : Footer
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/table',
    name: 'table',
    components: {
      default: Table,
      'header-top': Header,
      'header-bottom' : Footer
    }

  },
  {

    path: '',
    name: 'hachi',
    components: {
      default: hachi,
      'header-top': Header,
      'header-bottom' : Footer
    }
  },
 
  {
    path: '/user', components: {
      default: User,
      'header-top': Header,
      'header-bottom' : Footer
      
    }
  },
  {
    path: '/register', components: {
      default: Register,
      'header-top': Header,
      'header-bottom' : Footer
      
    }
  },
  {
    path: '/login', components: {
      default: Login,
      'header-top': Header,
      'header-bottom' : Footer
      
    }
  },
  {
    path: '/user/:id', components: {
      default: UserDetail,
      'header-top': Header,
      'header-bottom' : Footer
      
    }
  },

  {
    path :'/notfound',
    name : 'notfound',
    components : {
      default : NotFound,
      'header-top': Header,
      'header-bottom' : Footer
    }
  },
  {path : '*' , redirect : '/notfound'}


];