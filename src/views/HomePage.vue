<template>
  <div class="container mx-auto py-8 px-4">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-3xl font-bold mb-4">Welcome to Our Educational Platform</h2>
      <p class="text-gray-700 mb-6">Explore our courses and enhance your knowledge.</p>
      <div class="flex justify-center space-x-4">
        <router-link to="/courses" class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">View Courses</router-link>
        <router-link to="/profile" class="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition">View Profile</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.container {
  max-width: 800px;
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

.transition {
  transition: background-color 0.3s ease;
}

.text-blue-500 {
  color: #3b82f6;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.bg-blue-600 {
  background-color: #2563eb;
}

.text-white {
  color: white;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.hover\:bg-blue-600:hover {
  background-color: #2563eb;
}

.hover\:bg-green-600:hover {
  background-color: #16a34a;
}

.text-gray-700 {
  color: #4b5563;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.font-bold {
  font-weight: 700;
}

.text-3xl {
  font-size: 1.875rem;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --space-x-reverse: 0;
  margin-right: calc(1rem * var(--space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--space-x-reverse)));
}

.bg-green-500 {
  background-color: #10b981;
}

.bg-green-600 {
  background-color: #059669;
}
</style>
