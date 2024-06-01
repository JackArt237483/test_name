<template>
  <div class="container mx-auto py-8 px-4">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-3xl font-bold mb-6 text-center">Courses</h2>
      <p class="text-gray-700 mb-6 text-center">Browse through our available courses</p>
      <div v-if="loading" class="text-center text-gray-500">Loading courses...</div>
      <div v-else>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li v-for="course in courses" :key="course.id" class="bg-gray-100 rounded-lg p-4 shadow">
            <h3 class="text-xl font-semibold mb-2">{{ course.title }}</h3>
            <p class="text-gray-700">{{ course.description }}</p>
            <div class="mt-4 text-right">
              <router-link :to="`/courses/${course.id}`" class="text-blue-500 hover:underline">View Details</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CoursesPage',
  data() {
    return {
      courses: [],
      loading: true
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
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
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

.mb-6 {
  margin-bottom: 1.5rem;
}

.text-center {
  text-align: center;
}

.text-gray-700 {
  color: #374151;
}

.text-gray-500 {
  color: #6b7280;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.lg\:grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gap-6 {
  gap: 1.5rem;
}

.bg-gray-100 {
  background-color: #f3f4f6;
}

.p-4 {
  padding: 1rem;
}

.text-xl {
  font-size: 1.25rem;
}

.font-semibold {
  font-weight: 600;
}

.mt-4 {
  margin-top: 1rem;
}

.text-right {
  text-align: right;
}

.text-blue-500 {
  color: #3b82f6;
}

.hover\:underline:hover {
  text-decoration: underline;
}
</style>
