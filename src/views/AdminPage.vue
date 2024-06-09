<template>
  <div class="container" style="max-width: 800px; margin: 0 auto; padding: 2rem;">
    <div style="background-color: white; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); padding: 2rem;">
      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1.5rem; color: #1F2937;">Admin Panel</h2>
      <p style="color: #374151; margin-bottom: 1.5rem;">Use this panel to manage courses.</p>
      <form @submit.prevent="addCourse">
        <div>
          <label for="title" style="display: block; color: #374151; font-weight: 500;">Course Title:</label>
          <input type="text" id="title" v-model="courseForm.title"
                 style="margin-top: 0.5rem; display: block; width: 100%; padding: 0.5rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); outline: none; transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;"
                 @focus="applyFocusStyle($event)" @blur="removeFocusStyle($event)" required>
        </div>
        <div>
          <label for="description" style="display: block; color: #374151; font-weight: 500;">Course Description:</label>
          <input type="text" id="description" v-model="courseForm.description"
                 style="margin-top: 0.5rem; display: block; width: 100%; padding: 0.5rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); outline: none; transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;"
                 @focus="applyFocusStyle($event)" @blur="removeFocusStyle($event)" required>
        </div>
        <button type="submit" style="background-color: #3b82f6; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); transition: background-color 0.3s ease-in-out;">Add Course</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

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
      axios.post('http://localhost:3000/api/courses', this.courseForm)
          .then(response => {
            console.log('Course added:', response.data);
            this.courseForm.title = '';
            this.courseForm.description = '';
            this.$router.push(`/admin/add-lessons/${response.data.id}`);
          })
          .catch(error => {
            console.error('Error adding course:', error);
          });
    },
    applyFocusStyle(event) {
      event.target.style.boxShadow = '0 0 0 3px rgba(66, 153, 225, 0.5)';
      event.target.style.borderColor = 'transparent';
    },
    removeFocusStyle(event) {
      event.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
      event.target.style.borderColor = '#d1d5db';
    }
  }
};
</script>
