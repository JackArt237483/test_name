<template>
  <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">Update Info</h2>
    <form @submit.prevent="updateInfo" class="space-y-4">
      <div>
        <label for="phone" class="block text-gray-700">Phone Number:</label>
        <input type="text" id="phone" v-model="phone" required class="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded-md w-full">
      </div>
      <div>
        <label for="birthdate" class="block text-gray-700">Birthdate:</label>
        <input type="date" id="birthdate" v-model="birthdate" required class="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded-md w-full">
      </div>
      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition duration-300 ease-in-out w-full">Update Info</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      phone: this.user.phone,
      birthdate: this.user.birthdate
    };
  },
  methods: {
    updateInfo() {
      this.$emit('infoUpdated', { phone: this.phone, birthdate: this.birthdate });
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
