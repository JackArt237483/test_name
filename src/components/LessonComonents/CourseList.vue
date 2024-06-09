<!-- CourseList.vue -->

<template>
  <div>
    <h2>Courses</h2>
    <ul>
      <li v-for="course in courses" :key="course.id">
        <router-link :to="'/courses/' + course.id">{{ course.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      courses: []
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/courses')
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => {
          console.error('Error fetching courses:', error);
        });
  }
}
</script>
