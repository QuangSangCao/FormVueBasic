<template>
   <div class="container">
                <router-view name="header-top"></router-view>
                <router-view></router-view>
                <router-view name="header-bottom"></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  
};
</script>

<style>

</style>
