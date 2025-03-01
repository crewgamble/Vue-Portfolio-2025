<template>
  <div>
    <Navbar />

    <!-- Home Section -->
    <section id="home" class="h-100 bg-linen flex items-center justify-center">
      <h1 class="text-nepal text-4xl">Hey! I'm Crew.</h1>
      <div class="blob-outer-container">
      <div class="blob-inner-container">
          <div class="blob"></div>
      </div>
  </div>

    </section>

    <!-- About Me Section -->
    <section id="about" class="h-fit bg-linen flex items-center justify-center py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Image and Description -->
          <div class="flex flex-col items-center">
            <img src="/images/beanbag.jpg" alt="Picture of Me" class="rounded-full shadow h-96 w-96 mb-6 object-cover" />
            <p class="text-font text-base mb-4">
              I'm a software developer specializing in front-end and back-end development. I create dynamic, user-friendly web experiences with JavaScript, TypeScript, React, and WordPress. My back-end expertise includes PHP, Python, and SQL.
            </p>
            <p class="text-font text-base mb-4">
              Currently, I work as a front-end WordPress web developer, building high-performance websites. My passion lies in problem-solving, clean code, and continuous learning—whether it’s full-stack development or AI/ML.
            </p>
            <p class="text-font text-base mb-4">
              I'm seeking opportunities to transition into software engineering, focusing on front-end, scalable systems, or AI-driven solutions. Let's connect!
            </p>
          </div>

          <!-- Skills Accordion -->
          <div class="flex flex-col items-center w-full">
            <div class="w-full">
              <div v-for="(skills, category) in groupedSkills" :key="category" class="mb-4">
                <button @click="toggleAccordion(category)" class="w-full bg-nepal text-white text-lg font-semibold p-3 rounded-lg flex justify-between items-center">
                  {{ category }}
                  <span :class="openAccordions[category] ? 'rotate-180' : 'rotate-0'" class="transition-transform duration-300">▼</span>
                </button>
                
                <transition name="accordion" @enter="enter" @after-enter="afterEnter" @leave="leave">
                  <div v-if="openAccordions[category]" class="overflow-hidden p-3">
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      <div v-for="skill in skills" :key="skill.name" class="skill-card bg-info p-2 rounded-lg shadow-md flex flex-col items-center">
                        <img :src="skill.logo" :alt="`${skill.name} logo`" class="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
                        <span class="text-sm sm:text-base text-center break-words text-font">{{ skill.name }}</span>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="h-fit bg-linen flex items-center justify-center py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8 text-nepal">Projects</h1>
        <h2 class="text-3xl text-center mb-6 text-base text-font">Below are some of my recent personal and professional projects.</h2>
        
        <div class="flex justify-center">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl">
            <div v-for="(project, index) in [...professionalProjects, ...personalProjects]" :key="project.name" 
                 class="bg-info rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                 :class="(index === [...professionalProjects, ...personalProjects].length - 1 && index % 3 === 0) ? 'lg:col-span-2' : ''">
              <img v-if="project.image" :src="project.image" :alt="`${project.name} image`" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-2 text-nepal">{{ project.name }}</h3>
                <p class="text-font mb-4">{{ project.desc }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="skill in project.skills" :key="skill" class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{{ skill }}</span>
                </div>
                <div class="flex gap-4">
                  <a v-if="project.url" :href="project.url" target="_blank" class="text-blue-500 hover:underline">Visit Site</a>
                  <a v-if="project.repo" :href="project.repo" target="_blank" class="text-blue-500 hover:underline">View Repo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { skills } from './data/skills';
import { projects } from './data/projects';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default defineComponent({
  name: 'App',
  components: { Navbar, Footer },
  setup() {
    const groupedSkills = computed(() => {
      return skills.reduce((groups, skill) => {
        groups[skill.category] = groups[skill.category] || [];
        groups[skill.category].push(skill);
        return groups;
      }, {} as Record<string, typeof skills>);
    });

    const openAccordions = ref<Record<string, boolean>>({ [Object.keys(groupedSkills.value)[0]]: true });
    const toggleAccordion = (category: string) => {
      openAccordions.value[category] = !openAccordions.value[category];
    };

    const enter = (el: Element) => {
      (el as HTMLElement).style.height = 'auto';
      const height = getComputedStyle(el).height;
      (el as HTMLElement).style.height = '0';
      setTimeout(() => { (el as HTMLElement).style.height = height; }, 0);
    };

    const afterEnter = (el: Element) => {
      (el as HTMLElement).style.height = 'auto';
    };

    const leave = (el: Element) => {
      (el as HTMLElement).style.height = getComputedStyle(el).height;
      setTimeout(() => { (el as HTMLElement).style.height = '0'; }, 0);
    };

    return {
      groupedSkills,
      openAccordions,
      toggleAccordion,
      enter,
      afterEnter,
      leave,
      professionalProjects: computed(() => projects.filter(p => p.category === 'Professional')),
      personalProjects: computed(() => projects.filter(p => p.category === 'Personal')),
    };
  },
});
</script>
