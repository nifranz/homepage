<script setup>
import SectionHeader from "./SectionHeader.vue";

defineProps({
  skills: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="section" id="expertise">
    <SectionHeader
      index="01"
      title="Expertise"
      description="Hands-on expertise across infrastructure, development, and operations - built for real impact."
    />

    <div class="experience-grid">
      <article
        v-for="(skill, index) in skills"
        :key="skill.title"
        class="experience-card"
        v-reveal="{ delay: index * 90, direction: 'up' }"
      >
        <div class="experience-card-head">
          <span class="experience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                v-for="path in skill.iconPaths"
                :key="path"
                :d="path"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h3>{{ skill.title }}</h3>
        </div>
        <ul class="experience-card-list">
          <li v-for="point in skill.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
