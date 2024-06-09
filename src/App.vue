<template>
  <div id="app"  class="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import 'assets/tailwind.css';
</style>
