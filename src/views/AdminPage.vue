<template>
  <div class="container mx-auto py-8 px-4">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-3xl font-bold mb-4">Admin Panel</h2>
      <p class="text-gray-700 mb-4">Use this panel to manage courses.</p>
      <!-- Форма добавления курса -->
      <form @submit.prevent="addCourse" class="mt-6 space-y-4">
        <div>
          <label for="title" class="block text-gray-700">Course Title:</label>
          <input type="text" id="title" v-model="courseForm.title" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500" required>
        </div>
        <div>
          <label for="description" class="block text-gray-700">Course Description:</label>
          <input type="text" id="description" v-model="courseForm.description" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500" required>
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">Add Course</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data() {
    return {
      courseForm: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    addCourse() {
      // Логика добавления курса
      console.log('Course added:', this.courseForm);
      // Очистка формы после добавления
      this.courseForm.title = '';
      this.courseForm.description = '';
      // Здесь вы можете добавить логику для отправки данных на сервер с помощью axios
      // axios.post('/api/courses', this.courseForm).then(response => {
      //   console.log('Course added:', response.data);
      // }).catch(error => {
      //   console.error('Error adding course:', error);
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
