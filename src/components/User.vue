<template>
  <b-list-group>
    <b-list-group-item 
        v-for="(user,i) in users" 
        :key="i"
        :to="{path : `/user/${user.id}`}"
    >
        {{user.name}}
    </b-list-group-item>
  </b-list-group>
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
  }
};
</script>

<style>
</style>
