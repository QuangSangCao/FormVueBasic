<template>
  <div class="mt-4">
    
    <h3>User Id : {{$route.params.id}}</h3>
    <p>Name : {{activeUser.name}}</p>
    <p>Phone : {{activeUser.phone}}</p>
    <p><router-link to="/user">Back</router-link></p>
  </div>
</template>

<script>
export default {
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.users = json;
      });
  },
  data() {
    return {
      users: []
    };
  },
  computed: {
    activeUser() {
      let user = this.users.find(user => {
          return +user.id == +(this.$route.params.id);
      });
      return user;
    }
  }
};
</script>

<style>
</style>
