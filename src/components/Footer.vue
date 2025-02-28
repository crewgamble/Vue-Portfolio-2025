<template>
    <footer id="contact" class="bg-linen text-nepal py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Social Media Links -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-xl font-bold mb-4">Connect with Me</h3>
            <div class="flex space-x-4">
              <a
                href="https://github.com/crewgamble"
                target="_blank"
                class="text-font hover:transition-all duration-300 transform hover:scale-110"
              >
                <i class="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/crewgamble/"
                target="_blank"
                class="text-font hover:transition-all duration-300 transform hover:scale-110"
              >
                <i class="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
  
          <!-- Quick Links -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a href="#home" class="text-font hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" class="text-font hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" class="text-font hover:text-white transition-colors">Projects</a>
              </li>
            </ul>
          </div>
  
          <!-- Contact Information -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-xl font-bold mb-4">Contact Me</h3>
            <p class="text-font">
              Email: <a href="mailto:crewg314@gmail.com" class="hover:text-white transition-colors">crewg314@gmail.com</a>
            </p>
          </div>
        </div>
  
        <!-- Copyright Notice -->
        <div class="text-center mt-8 border-t border-gray-700 pt-8">
          <p class="text-font">© 2025 Crew Gamble. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Footer",
  });
  </script>
  