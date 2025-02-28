<template>
  <nav
    class="fixed top-4 left-1/2 transform -translate-x-1/2 rounded-full px-6 py-2 -md z-10 transition-all duration-300"
    :class="{ 'bg-[#f5f5dc]': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <div class="flex items-center space-x-4">
      <!-- Navigation Links -->
      <div class="flex space-x-3">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          @click.prevent="scrollToSection(link.href)"
          class="px-4 py-2 rounded-full text-nepal hover:bg-[#edeac4] transition"
          :class="{ 'bg-gray-100 shadow text-gray-900': activeLink === link.href }"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const activeLink = ref('#about');
    const isScrolled = ref(false);

    const links = [
      { id: 2, text: 'About', href: '#about' },
      { id: 4, text: 'Projects', href: '#projects' },
      { id: 5, text: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (sectionId: string) => {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        activeLink.value = sectionId;
      }
    };

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10; // Change background when scrolling past 10px
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      links,
      activeLink,
      scrollToSection,
      isScrolled,
    };
  },
});
</script>
