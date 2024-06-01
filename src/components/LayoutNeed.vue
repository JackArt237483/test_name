<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white">
          <router-link to="/" class="mr-4">Home</router-link>
          <router-link to="/courses" class="mr-4">Courses</router-link>
          <router-link to="/admin" class="mr-4">Admin</router-link>
          <router-link to="/profile" class="mr-4" v-if="token">Profile</router-link>
        </div>
        <div class="text-white">
          <button @click="logout" v-if="token" class="bg-red-600 px-4 py-2 rounded">Logout</button>
          <router-link to="/login" v-else class="bg-blue-600 px-4 py-2 rounded">Login</router-link>
          <router-link to="/register" v-if="!token" class="bg-blue-600 px-4 py-2 rounded">Register</router-link>
        </div>
      </div>
    </nav>
    <main class="container mx-auto py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem('token')
    };
  },
  watch: {
    '$route'() {
      this.token = localStorage.getItem('token');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.token = null;
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
