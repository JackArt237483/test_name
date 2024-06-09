<template>
  <div class="container mx-auto py-8 px-4">
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <div v-if="course">
        <h2 class="text-3xl font-bold mb-4 text-center">{{ course.title }}</h2>
        <p class="text-gray-700 mb-6 text-justify">{{ course.description }}</p>
        <h3 class="text-2xl font-semibold mb-4">Lessons</h3>
        <ul class="space-y-4">
          <li v-for="lesson in lessons" :key="lesson.id" class="border-b pb-2">
            <h4 class="text-xl font-bold">{{ lesson.title }}</h4>
            <p class="text-gray-600">{{ lesson.description }}</p>
          </li>
        </ul>
        <button @click="showLessonForm = true" class="mt-6 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add New Lesson
        </button>
      </div>
    </div>
    <router-link to="/courses" class="text-blue-500 hover:underline mt-4 block">Back to Courses</router-link>

    <!-- Modal for Lesson Form -->
    <div v-if="showLessonForm" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" @click.self="closeLessonForm">
      <div class="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <LessonForm :courseId="course.id" @lesson-added="fetchLessons" @close-form="closeLessonForm" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LessonForm from "@/components/LessonComonents/LessonForm.vue";

export default {
  name: 'CourseDetails',
  components: {
    LessonForm
  },
  data() {
    return {
      course: null,
      lessons: [],
      showLessonForm: false
    };
  },
  created() {
    this.fetchCourseDetails();
    this.fetchLessons();
  },
  methods: {
    fetchCourseDetails() {
      const courseId = this.$route.params.id;
      axios.get(`http://localhost:3000/api/courses/${courseId}`)
          .then(response => {
            console.log('Course data:', response.data);
            this.course = response.data;
          })
          .catch(error => {
            console.error('Error fetching course details:', error);
          });
    },
    fetchLessons() {
      const courseId = this.$route.params.id;
      axios.get(`http://localhost:3000/api/courses/${courseId}/lessons`)
          .then(response => {
            console.log('Lessons data:', response.data);
            this.lessons = response.data;
          })
          .catch(error => {
            console.error('Error fetching lessons:', error);
          });
    },
    closeLessonForm() {
      this.showLessonForm = false;
    }
  }
};
</script>
