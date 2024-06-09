<template>
  <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-lg p-6 mb-6 max-w-lg mx-auto text-white">
    <h2 class="text-3xl font-bold mb-6 text-center">Profile Details</h2>
    <div v-if="user">
      <div class="flex items-center mb-6">
        <div v-if="user.avatar" class="h-20 w-20 rounded-full overflow-hidden mr-4 shadow-md">
          <img :src="user.avatar" alt="User Avatar" class="h-full w-full object-cover">
        </div>
        <div v-else class="bg-gray-300 rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold text-white mr-4 shadow-md">
          {{ user.username.charAt(0).toUpperCase() }}
        </div>
        <div>
          <p class="text-2xl font-semibold">{{ user.username }}</p>
          <p class="text-lg">{{ user.email }}</p>
        </div>
      </div>
      <div class="bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-inner">
        <p class="text-lg mb-2 flex items-center">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a4 4 0 004.22 0L23 8M3 8v10a4 4 0 004 4h10a4 4 0 004-4V8M3 8l7.89 5.26a4 4 0 004.22 0L23 8"></path>
          </svg>
          <strong>Phone Number: </strong> {{ user.phone }}
        </p>
        <p class="text-lg flex items-center">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 014-4h0a4 4 0 014 4v0a4 4 0 01-4 4h0a4 4 0 01-4-4zm0 0a4 4 0 00-4 4v7a4 4 0 004 4h8a4 4 0 004-4v-7a4 4 0 00-4-4"></path>
          </svg>
          <strong>Birthdate: </strong> {{ user.birthdate }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  name: 'ProfileDetails'
};
</script>

<style scoped>
/* Additional styles can be added here */
</style>
