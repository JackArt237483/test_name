<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" @click.self="cancelEdit">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <h2 class="text-3xl font-bold mb-6 text-gray-800">Edit Course</h2>
      <form @submit.prevent="updateCourse" class="space-y-6">
        <div>
          <label for="title" class="block text-gray-700 font-medium">Course Title:</label>
          <input type="text" id="title" v-model="courseForm.title" class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
        </div>
        <div>
          <label for="description" class="block text-gray-700 font-medium">Course Description:</label>
          <input type="text" id="description" v-model="courseForm.description" class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
        </div>
        <div class="flex justify-end space-x-4">
          <button type="button" @click="cancelEdit" class="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition ease-in-out duration-300">Cancel</button>
          <button type="submit" class="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition ease-in-out duration-300">Update Course</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CourseEditModal',
  props: ['courseId', 'visible'],
  data() {
    return {
      courseForm: {
        title: '',
        description: ''
      }
    };
  },
  watch: {
    courseId: 'fetchCourseDetails'
  },
  methods: {
    fetchCourseDetails() {
      if (!this.courseId) return;

      axios.get(`http://localhost:3000/api/courses/${this.courseId}`)
          .then(response => {
            this.courseForm = response.data;
          })
          .catch(error => {
            console.error('Error fetching course details:', error);
          });
    },
    updateCourse() {
      axios.put(`http://localhost:3000/api/courses/${this.courseId}`, this.courseForm)
          .then(response => {
            console.log('Course updated:', response.data);
            this.$emit('update-success');
          })
          .catch(error => {
            console.error('Error updating course:', error);
          });
    },
    cancelEdit() {
      if (confirm('Are you sure you want to cancel without saving changes?')) {
        this.$emit('cancel');
      }
    }
  }
};
</script>

<style scoped>
/* Add any additional styles for the modal here */
</style>

