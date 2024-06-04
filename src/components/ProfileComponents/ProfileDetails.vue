<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Profile Details</h2>
    <div v-if="user">
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
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
/* Add your styles here */
</style>
