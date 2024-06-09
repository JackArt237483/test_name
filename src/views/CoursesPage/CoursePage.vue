<!-- CoursesPage.vue -->

<template>
  <div class="container mx-auto py-8 px-4">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-3xl font-bold mb-6 text-center">Courses</h2>
      <p class="text-gray-700 mb-6 text-center">Browse through our available courses</p>
      <div v-if="loading" class="text-center text-gray-500">Loading courses...</div>
      <div v-else>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li v-for="course in courses" :key="course.id" class="bg-gray-100 rounded-lg p-4 shadow">
            <h3 class="text-xl font-semibold mb-2 cursor-pointer" @click="goToCourse(course.id)">{{ course.title }}</h3>
            <p class="text-gray-700">{{ course.description }}</p>
            <div class="mt-4 flex justify-between">
              <button @click="editCourse(course.id)" class="text-green-500 hover:underline">Edit</button>
              <button @click="confirmDelete(course.id)" class="text-red-500 hover:underline">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <CourseEditModal
        v-if="editModalVisible"
        :courseId="selectedCourseId"
        :visible="editModalVisible"
        @update-success="handleUpdateSuccess"
        @cancel="handleCancel"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CourseEditModal from '@/components/CourseEditModal.vue';

export default {
  name: 'CoursesPage',
  components: { CourseEditModal },
  data() {
    return {
      courses: [],
      loading: true,
      editModalVisible: false,
      selectedCourseId: null
    };
  },
  created() {
    this.fetchCourses();
  },
  methods: {
    fetchCourses() {
      axios.get('http://localhost:3000/api/courses')
          .then(response => {
            this.courses = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching courses:', error);
            this.loading = false;
          });
    },
    editCourse(courseId) {
      this.selectedCourseId = courseId;
      this.editModalVisible = true;
    },
    handleUpdateSuccess() {
      this.editModalVisible = false;
      this.fetchCourses();
    },
    handleCancel() {
      this.editModalVisible = false;
    },
    confirmDelete(courseId) {
      if (confirm('Are you sure you want to delete this course?')) {
        this.deleteCourse(courseId);
      }
    },
    deleteCourse(courseId) {
      axios.delete(`http://localhost:3000/api/courses/${courseId}`)
          .then(() => {
            this.courses = this.courses.filter(course => course.id !== courseId);
          })
          .catch(error => {
            console.error('Error deleting course:', error);
          });
    },
    goToCourse(courseId) {
      this.$router.push(`/courses/${courseId}`);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
