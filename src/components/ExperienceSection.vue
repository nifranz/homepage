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
  <section class="section" id="experience">
    <SectionHeader index="01" title="Skillset" />

    <div class="experience-timeline">
      <article
        v-for="(skill, index) in skills"
        :key="skill.title"
        class="experience-row"
        :class="{ flipped: index % 2 !== 0 }"
        v-reveal="{
          delay: index * 90,
          direction: index % 2 === 0 ? 'left' : 'right',
        }"
      >
        <div class="experience-title-pane">
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
        <div class="experience-content-pane">
          <ul>
            <li v-for="point in skill.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
