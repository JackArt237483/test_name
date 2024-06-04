<template>
  <div class="container mx-[20px] py-[20px]">
    <ProfileDetails :user="user" />
    <ChangeUsername @usernameChanged="updateUsername" />
    <ChangePassword />
  </div>
</template>

<script>
import ProfileDetails from '@/components/ProfileComponents/ProfileDetails.vue';
import ChangeUsername from '@/components/ProfileComponents/ChangeUsername.vue';
import ChangePassword from '@/components/ProfileComponents/ChangePassword.vue';

export default {
  name: 'ProfilePage',
  components: {
    ProfileDetails,
    ChangeUsername,
    ChangePassword
  },
  data() {
    return {
      user: null
    };
  },
  async created() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push('/login');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      this.user = await response.json();
    } catch (err) {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
  methods: {
    updateUsername(newUsername) {
      this.user.username = newUsername;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
