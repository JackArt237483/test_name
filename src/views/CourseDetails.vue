<template>
  <div>
    <h1>{{ course.title }}</h1>
    <p>{{ course.description }}</p>
    <router-link to="/courses">Back to Courses</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CourseDetails',
  data() {
    return {
      course: {}
    };
  },
  created() {
    this.fetchCourseDetails();
  },
  methods: {
    fetchCourseDetails() {
      const courseId = this.$route.params.id;
      axios.get(`http://localhost:3000/api/courses/${courseId}`)
          .then(response => {
            this.course = response.data;
          })
          .catch(error => {
            console.error('Error fetching course details:', error);
          });
    }
  }
};
</script>
