<template>
  <div>
    <nav class="bg-gray-800 p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Site Title or Logo -->
        <div class="text-white text-2xl font-bold">
          <router-link to="/" class="hover:text-gray-300">MySite</router-link>
        </div>
        <!-- Navigation Links for Desktop -->
        <div class="hidden lg:flex text-white space-x-4">
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
          <router-link to="/courses" class="hover:text-gray-300">Courses</router-link>
          <router-link to="/admin" class="hover:text-gray-300">Admin</router-link>
          <router-link to="/profile" v-if="token" class="hover:text-gray-300">Profile</router-link>
        </div>
        <!-- Authentication Buttons for Desktop -->
        <div class="hidden lg:flex text-white space-x-4">
          <button @click="logout" v-if="token" class="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-200">Logout</button>
          <router-link to="/login" v-else class="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-200">Login</router-link>
          <router-link to="/register" v-if="!token" class="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-200">Register</router-link>
        </div>
        <!-- Burger Menu Button for Mobile -->
        <button @click="toggleMenu" class="text-white lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="lg:hidden bg-gray-800 text-white flex flex-col space-y-4 p-4">
        <router-link to="/" class="hover:text-gray-300" @click="closeMenu">Home</router-link>
        <router-link to="/courses" class="hover:text-gray-300" @click="closeMenu">Courses</router-link>
        <router-link to="/admin" class="hover:text-gray-300" @click="closeMenu">Admin</router-link>
        <router-link to="/profile" v-if="token" class="hover:text-gray-300" @click="closeMenu">Profile</router-link>
        <button @click="logout" v-if="token" class="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-200">Logout</button>
        <router-link to="/login" v-else class="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-200" @click="closeMenu">Login</router-link>
        <router-link to="/register" v-if="!token" class="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-200" @click="closeMenu">Register</router-link>
      </div>
    </nav>
    <main class="container mx-auto py-4">
      <router-view></router-view>
    </main>
    <footer class="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 MySite. All rights reserved.</p>
      <div class="flex justify-center space-x-4">
        <a href="https://www.facebook.com" target="_blank" class="hover:text-gray-300">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" class="hover:text-gray-300">Twitter</a>
        <a href="https://www.linkedin.com" target="_blank" class="hover:text-gray-300">LinkedIn</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem('token'),
      menuOpen: false
    };
  },
  watch: {
    '$route'() {
      this.token = localStorage.getItem('token');
      this.menuOpen = false; // Close menu on route change
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.token = null;
      this.$router.push('/login');
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
nav {
  transition: background-color 0.3s ease;
}

nav:hover {
  background-color: #4a5568; /* Slightly lighter shade of gray */
}

footer {
  background-color: #2d3748; /* Darker gray */
}

footer p {
  margin-bottom: 0.5rem;
}

footer a {
  transition: color 0.3s ease;
}

footer a:hover {
  color: #63b3ed; /* Light blue */
}

button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

router-link {
  transition: color 0.3s ease;
}

router-link:hover {
  color: #63b3ed; /* Light blue */
}
</style>
