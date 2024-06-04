<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Change Username</h2>
    <form @submit.prevent="changeUsername" class="space-y-4">
      <div>
        <label for="newUsername" class="block text-gray-700">New Username:</label>
        <input type="text" id="newUsername" v-model="newUsername" required class="border p-2 rounded w-full">
      </div>
      <button type="submit" class="bg-blue-600 text-white p-2 rounded">Change Username</button>
    </form>
    <div v-if="success" class="text-green-500 mt-4">{{ success }}</div>
  </div>
</template>

<script>
export default {
  name: 'ChangeUsername',
  data() {
    return {
      newUsername: '',
      success: ''
    };
  },
  methods: {
    async changeUsername() {
      this.success = '';
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/change-username', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ username: this.newUsername })
        });
        if (response.ok) {
          this.success = 'Username changed successfully!';
          this.$emit('usernameChanged', this.newUsername);
        } else {
          throw new Error('Failed to change username');
        }
      } catch (err) {
        this.success = 'An error occurred. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
