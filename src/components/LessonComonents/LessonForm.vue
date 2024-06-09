<template>
  <div>
    <h3 class="text-2xl font-semibold mb-4 text-center">Add New Lesson</h3>
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
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Lesson
        </button>
        <button @click="$emit('close-form')" type="button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LessonForm',
  props: {
    courseId: {
      type: String,
      required: true
    }
  },
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
      axios.post(`http://localhost:3000/api/courses/${this.courseId}/lessons`, this.lessonForm)
          .then(response => {
            console.log('Lesson added:', response.data);
            this.lessonForm.title = '';
            this.lessonForm.description = '';
            this.$emit('lesson-added');
            this.$emit('close-form');
          })
          .catch(error => {
            console.error('Error adding lesson:', error);
          });
    }
  }
};
</script>
