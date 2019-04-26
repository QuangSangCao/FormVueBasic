<template>
  <div>
    <b-table id="my-Table" :items="items"></b-table>
    <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model='filter'></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="text">Search</b-button>
        </b-nav-form>
        <b-table
      id="my-table"
      :items="dataTable"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  computed: {},
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(json => {
        this.items = json;
      });
  }
};
</script>