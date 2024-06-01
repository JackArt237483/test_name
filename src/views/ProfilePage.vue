<template>
  <div class="container mx-auto py-8 px-4">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-3xl font-bold mb-4">Profile</h2>
      <div class="space-y-4">
        <div class="flex items-center">
          <div class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-gray-500">
            <!-- Здесь можно вставить аватар пользователя -->
            U
          </div>
          <div class="ml-6">
            <p class="text-xl font-medium text-gray-700">John Doe</p>
            <p class="text-gray-500">johndoe@example.com</p>
          </div>
        </div>
        <p class="text-gray-700">Profile details go here. You can add more information about the user, their activities, and other relevant details.</p>
        <!-- Форма редактирования профиля -->
        <form @submit.prevent="saveProfile" class="mt-6 space-y-4">
          <div>
            <label for="name" class="block text-gray-700">Name:</label>
            <input type="text" id="name" v-model="profileForm.name" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500">
          </div>
          <div>
            <label for="email" class="block text-gray-700">Email:</label>
            <input type="email" id="email" v-model="profileForm.email" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500">
          </div>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      profileForm: {
        name: 'John Doe',
        email: 'johndoe@example.com'
      }
    };
  },
  methods: {
    saveProfile() {
      // Здесь вы можете добавить логику для сохранения профиля
      console.log('Profile saved', this.profileForm);
      // Например, вы можете отправить данные на сервер с помощью axios
      // axios.post('/api/profile', this.profileForm).then(response => {
      //   console.log('Profile updated:', response.data);
      // }).catch(error => {
      //   console.error('Error updating profile:', error);
      // });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}

.bg-white {
  background-color: white;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.text-3xl {
  font-size: 1.875rem;
}

.font-bold {
  font-weight: 700;
}

.mb-4 {
  margin-bottom: 1rem;
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--space-y-reverse)));
  margin-bottom: calc(1rem * var(--space-y-reverse));
}

.w-24 {
  width: 6rem;
}

.h-24 {
  height: 6rem;
}

.rounded-full {
  border-radius: 9999px;
}

.bg-gray-200 {
  background-color: #e5e7eb;
}

.text-gray-500 {
  color: #6b7280;
}

.ml-6 {
  margin-left: 1.5rem;
}

.text-xl {
  font-size: 1.25rem;
}

.font-medium {
  font-weight: 500;
}

.text-gray-700 {
  color: #374151;
}

.mt-1 {
  margin-top: 0.25rem;
}

.w-full {
  width: 100%;
}

.border-gray-300 {
  border-color: #d1d5db;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.focus\:ring {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.focus\:ring-opacity-50 {
  --tw-ring-opacity: 0.5;
}

.focus\:ring-blue-500 {
  --tw-ring-color: #3b82f6;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.hover\:bg-blue-600:hover {
  background-color: #2563eb;
}

.text-white {
  color: white;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.transition {
  transition: background-color 0.3s ease;
}

.mt-6 {
  margin-top: 1.5rem;
}
</style>
