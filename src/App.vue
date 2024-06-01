<template>
  <div id="app">
    <router-view></router-view>
    <footer class="bg-gray-800 text-white text-center p-4 mt-4">
      <p>&copy; 2023 Educational Platform. All rights reserved.</p>
    </footer>
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
