<template>
  <div class="bg-white shadow-lg rounded-lg mt-[30px] p-6 mb-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Upload Avatar</h2>
    <form @submit.prevent="uploadAvatar" class="space-y-4">
      <div>
        <input type="file" @change="onFileChange" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none">
      </div>
      <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out">Upload Avatar</button>
    </form>
    <div v-if="success" class="text-green-500 mt-4">{{ success }}</div>
  </div>
</template>

<script>
export default {
  name: 'UploadAvatar',
  data() {
    return {
      file: null,
      success: ''
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
    },
    async uploadAvatar() {
      if (!this.file) return;
      const formData = new FormData();
      formData.append('avatar', this.file);

      try {
        const response = await fetch('http://localhost:3000/api/upload-avatar', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: formData
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Failed to upload avatar');
        }
        this.success = 'Avatar uploaded successfully!';
        this.$emit('avatarUploaded', data.avatarUrl);
      } catch (err) {
        console.error(err);
        this.success = 'Failed to upload avatar.';
      }
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
