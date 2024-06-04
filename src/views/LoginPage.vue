<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center text-blue-600">Login</h1>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-gray-700">Email:</label>
          <input type="email" id="email" v-model="email" required class="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600">
        </div>
        <div>
          <label for="password" class="block text-gray-700">Password:</label>
          <input type="password" id="password" v-model="password" required class="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600">
        </div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <button type="submit" class="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition duration-200">Login</button>
      </form>
      <p class="text-center mt-4">
        Don't have an account?
        <router-link to="/register" class="text-blue-600 hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      this.error = '';
      try {
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        const data = await response.json();
        if (!response.ok) {
          this.error = data.message;
          return;
        }
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', this.email)
        localStorage.setItem('password', this.password)
        this.$router.push('/profile');
      } catch (err) {
        this.error = 'An error occurred during login. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
