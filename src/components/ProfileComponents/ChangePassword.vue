<template>
  <div class="bg-white shadow-lg rounded-lg mt-[30px] p-6 flex-1">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Change Password</h2>
    <form @submit.prevent="changePassword" class="space-y-4">
      <div>
        <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password:</label>
        <input type="password" id="currentPassword" v-model="currentPassword" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <div>
        <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password:</label>
        <input type="password" id="newPassword" v-model="newPassword" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out">Change Password</button>
    </form>
    <div v-if="success" class="text-green-500 mt-4">{{ success }}</div>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      success: ''
    };
  },
  methods: {
    async changePassword() {
      this.success = '';
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/change-password', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ currentPassword: this.currentPassword, newPassword: this.newPassword })
        });
        if (response.ok) {
          this.success = 'Password changed successfully!';
        } else {
          throw new Error('Failed to change password');
        }
      } catch (err) {
        this.success = 'An error occurred. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
input[type="password"] {
  transition: border-color 0.3s ease-in-out;
}

button {
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;
}

button:hover {
  background-color: #4c51bf;
}

button:focus {
  outline: none;
  transform: scale(1.02);
}

</style>
