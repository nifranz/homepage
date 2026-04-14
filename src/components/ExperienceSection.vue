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
      title="Experience"
      description="What I've built and operated, from Vue frontends to Linux servers."
    />

    <div class="exp-cards">
      <div
        class="exp-card"
        v-for="(skill, i) in skills"
        :key="skill.title"
        v-reveal="{ delay: i * 80, direction: 'up' }"
      >
        <div class="exp-card-head">
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
        <p class="exp-card-summary">{{ skill.summary }}</p>
        <div class="exp-card-tags">
          <span class="exp-card-tag" v-for="tag in skill.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
