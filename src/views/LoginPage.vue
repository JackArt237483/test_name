<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="login" class="space-y-4">
      <div>
        <label for="email" class="block text-gray-700">Email:</label>
        <input type="email" id="email" v-model="email" required class="border p-2 rounded w-full">
      </div>
      <div>
        <label for="password" class="block text-gray-700">Password:</label>
        <input type="password" id="password" v-model="password" required class="border p-2 rounded w-full">
      </div>
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <button type="submit" class="bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
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
