<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 py-[150px]">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center text-blue-600">Register</h1>
      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label for="username" class="block text-gray-700">Username:</label>
          <input type="text" id="username" v-model="username" required class="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600">
        </div>
        <div>
          <label for="email" class="block text-gray-700">Email:</label>
          <input type="email" id="email" v-model="email" required class="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600">
        </div>
        <div>
          <label for="password" class="block text-gray-700">Password:</label>
          <input type="password" id="password" v-model="password" required class="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600">
        </div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <button type="submit" class="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition duration-200">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async register() {
      this.error = '';
      try {
        const response = await fetch('http://localhost:3000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password
          })
        });
        const data = await response.json();
        if (!response.ok) {
          this.error = data.errors ? data.errors.map(e => e.msg).join(', ') : data.message;
          return;
        }
        alert('Registration successful! Check your email for confirmation.');
        this.$router.push('/login');
      } catch (err) {
        this.error = 'An error occurred during registration. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
