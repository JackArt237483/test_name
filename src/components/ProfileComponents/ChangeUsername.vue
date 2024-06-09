<template>
  <div class="bg-white shadow-lg rounded-lg p-8 flex-1">
    <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Change Username</h2>
    <form @submit.prevent="changeUsername" class="space-y-6">
      <div>
        <label for="newUsername" class="block text-sm font-medium text-gray-700">New Username:</label>
        <input type="text" id="newUsername" v-model="newUsername" required
               class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                      focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                      transition duration-300 ease-in-out hover:shadow-md">
      </div>
      <button type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border
                     border-transparent rounded-md shadow-sm text-sm font-medium
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     transition duration-300 ease-in-out">
        Change Username
      </button>
    </form>
    <div v-if="success" class="text-green-500 mt-4 text-center">
      {{ success }}
    </div>
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
input {
  transition: box-shadow 0.3s ease-in-out;
}

button {
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
</style>
