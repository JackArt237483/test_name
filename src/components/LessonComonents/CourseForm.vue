<!-- LessonForm.vue -->

<template>
  <div>
    <h2>Add Lesson</h2>
    <form @submit.prevent="addLesson">
      <label>Title:</label>
      <input type="text" v-model="newLesson.title" required>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newLesson: {
        title: ''
      }
    }
  },
  props: ['courseId'],
  methods: {
    addLesson() {
      axios.post(`http://localhost:3000/api/courses/${this.courseId}/lessons`, this.newLesson)
          .then(response => {
            console.log('Lesson added:', response.data);
            // Опционально: обновляем список уроков после добавления нового
            this.newLesson.title = '';
          })
          .catch(error => {
            console.error('Error adding lesson:', error);
          });
    }
  }
}
</script>
