<template>
  <div class="login">
      <h3>LOGIN</h3>
      <div class="grey-text">
      <mdb-input v-model="email" label="Your email" icon="envelope" type="email"/>
      <mdb-input v-model="password" label="Your password" icon="lock" type="password"/>
    </div>
    <button @click="login">Login</button>
    <p>You don't have an account ? You can <router-link to="/register">create one</router-link></p>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
import firebase from "firebase";
export default {
  name: "Basic",
  components: {
    mdbInput,
   
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then( () => {
          this.$router.push({path :'/'});
        }),
        err => {
          alert(err.message);
        };
    }
  }
};
</script>

<style>
</style>
