<template>
  <div class="max-w-full mx-auto px-[30px] py-6">
    <ProfileDetails :user="user" />
    <div class="flex flex-col lg:flex-row lg:space-x-6 mt-6">
      <div class="flex-1">
        <ChangeUsername @usernameChanged="updateUsername" />
        <ChangePassword />
      </div>
      <div class="flex-1 mt-6 lg:mt-0">
        <UploadAvatar @avatarUploaded="updateAvatar" />
        <UserInfo @infoUpdated="updateUserInfo" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileDetails from '@/components/ProfileComponents/ProfileDetails.vue';
import ChangeUsername from '@/components/ProfileComponents/ChangeUsername.vue';
import ChangePassword from '@/components/ProfileComponents/ChangePassword.vue';
import UploadAvatar from "@/components/ProfileComponents/UploadAvatar.vue";
import UserInfo from "@/components/ProfileComponents/UserInfo.vue";


export default {
  name: 'ProfilePage',
  components: {
    ProfileDetails,
    ChangeUsername,
    ChangePassword,
    UploadAvatar,
    UserInfo
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
        avatar: null,
        phone:  localStorage.getItem('phone') || '',
        birthdate: localStorage.getItem('birthdate') || ''
      }
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
      console.log(response.status); // Отладочный вывод кода статуса ответа
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const data = await response.json();
      this.user.username = data.username;
      this.user.email = data.email;
      this.user.avatar = data.avatar;
      this.user.phone = this.user.phone || data.phone;
      this.user.birthdate = this.user.birthdate || data.birthdate;
    } catch (err) {
      console.error(err); // Отладочный вывод ошибки
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
  methods: {
    updateUsername(newUsername) {
      this.user.username = newUsername;
    },
    updateAvatar(newAvatar) {
      this.user.avatar = newAvatar;
    },
    updateUserInfo(newInfo) {
      this.user.phone = newInfo.phone;
      this.user.birthdate = newInfo.birthdate;
      localStorage.setItem('phone', this.user.phone);
      localStorage.setItem('birthdate', this.user.birthdate);
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
