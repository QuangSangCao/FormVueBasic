<template>
    <div>
     <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    
    <router-link to="/" tag="div" active-class="active" exact>
    <b-navbar-brand >Home</b-navbar-brand>
    </router-link>

    <router-link to="/form" tag="div" active-class="active">
    <b-navbar-brand >Form</b-navbar-brand></router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <router-link to="/table" tag="div" active-class="active">
    <b-navbar-brand >Table</b-navbar-brand></router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <router-link to="/user" tag="div" active-class="active">
    <b-navbar-brand >User</b-navbar-brand></router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>   
    </div>
</template>
<style>
.navbar-brand{
    cursor: pointer;
}
</style>