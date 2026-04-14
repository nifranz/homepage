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
    <SectionHeader
      index="03"
      title="Projects"
      description="From research prototypes to production-ready systems - every project pushes ideas into reality."
    />

    <div class="project-timeline">
      <article
        class="project-row"
        v-for="(project, index) in projects"
        :key="project.title"
        :class="{ flipped: index % 2 !== 0 }"
        v-reveal="{
          delay: index * 90,
          direction: index % 2 === 0 ? 'left' : 'right',
        }"
      >
        <div class="project-title-pane">
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
          <div class="project-heading">
            <p class="project-date">{{ project.date }}</p>
            <h3>{{ project.title }}</h3>
            <p v-if="project.place" class="project-place">{{ project.place }}</p>
          </div>
        </div>
        <div class="project-content-pane">
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span class="project-tag" v-for="tag in project.tags" :key="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
