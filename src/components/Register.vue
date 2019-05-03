<template>
  <div class="register">
    <p>Create a new Account</p>
    <div class="grey-text">
      <mdb-input v-model="email" label="Your email" icon="envelope" type="email"/>
      <mdb-input v-model="password" label="Your password" icon="lock" type="password"/>
    </div>
    <button @click="register">
      Register
      <router-link to="/login"></router-link>
    </button>
    <span>
      Go back to
      <router-link to="/login">login</router-link>
    </span>
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
      email: "",
      password: ""
    };
  },
  methods: {
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then( () => {
          this.$router.push({path: '/'});
        }),
        err => {
          alert(err.message);
        };
    }
  }
};
</script>

<style>
.register {
  margin-top: 40px;
}
input {
  margin: 10px;
  width: 20%;
  padding: 10px;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
  margin: 10%;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
