<script setup>
import SectionHeader from "./SectionHeader.vue";

defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="section" id="projects">
    <SectionHeader index="03" title="Projects" />

    <div class="project-cards">
      <article
        class="project-card"
        v-for="(project, index) in projects"
        :key="project.title"
        v-reveal="{ delay: index * 110, direction: 'up' }"
      >
        <span class="project-logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              v-for="path in project.logoPaths"
              :key="path"
              :d="path"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="project-tags">
          <span class="project-tag" v-for="tag in project.tags" :key="tag">
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
