<template>
  <div class="container mx-auto py-8 px-4 bg-white shadow-md rounded-lg max-w-md">
    <h2 class="text-3xl font-bold mb-4 text-center">Add Lessons to Course</h2>
    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Lesson Title</label>
        <input v-model="lessonForm.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Lesson Description</label>
        <textarea v-model="lessonForm.description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" required></textarea>
      </div>
      <div class="flex justify-between items-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Lesson</button>
        <button @click="checkAndCloseForm" type="button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddLessons',
  data() {
    return {
      lessonForm: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    submitForm() {
      const courseId = this.$route.params.courseId;
      axios.post(`http://localhost:3000/api/courses/${courseId}/lessons`, this.lessonForm)
          .then(response => {
            console.log('Lesson added:', response.data);
            // Очистка формы
            this.lessonForm.title = '';
            this.lessonForm.description = '';
            // Перенаправление на страницу курса
            this.$router.push(`/courses/${courseId}`);
          })
          .catch(error => {
            console.error('Error adding lesson:', error);
          });
    },
    checkAndCloseForm() {
      if (this.lessonForm.title === '' && this.lessonForm.description === '') {
        this.$router.push(`/courses/${this.$route.params.courseId}`);
      } else {
        alert('Please clear the form fields before closing.');
      }
    }
  }
};
</script>

<style scoped>
/* Дополнительные стили для уменьшения размера формы и добавления отступов */
.container {
  max-width: 1000px;
}
</style>
