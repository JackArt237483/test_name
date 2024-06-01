<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold mb-8 text-center">Register</h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 font-medium mb-2">Username:</label>
          <input type="text" id="username" v-model="username" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-2">Email:</label>
          <input type="email" id="email" v-model="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-medium mb-2">Password:</label>
          <input type="password" id="password" v-model="password" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      password: '',
      email: ''
    };
  },
  methods: {
    register() {
      axios.post('http://localhost:3000/api/register', {
        username: this.username,
        password: this.password,
        email: this.email
      })
          .then(response => {
            console.log('Registered successfully:', response.data);
          })
          .catch(error => {
            console.error('Error registering:', error);
          });
    }
  }
};
</script>
