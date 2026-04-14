<script setup>
import { ref } from "vue";
import SectionHeader from "./SectionHeader.vue";

defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

const expanded = ref(new Set());

function toggle(index) {
  if (expanded.value.has(index)) {
    expanded.value.delete(index);
  } else {
    expanded.value.add(index);
  }
  expanded.value = new Set(expanded.value);
}

function onBeforeEnter(el) {
  el.style.maxHeight = '0';
  el.style.opacity = '0';
  el.style.overflow = 'hidden';
}

function onEnter(el, done) {
  requestAnimationFrame(() => {
    el.style.transition = 'max-height 0.32s ease, opacity 0.25s ease';
    el.style.maxHeight = el.scrollHeight + 'px';
    el.style.opacity = '1';
  });
  el.addEventListener('transitionend', () => {
    el.style.maxHeight = '';
    el.style.overflow = '';
    done();
  }, { once: true });
}

function onLeave(el, done) {
  el.style.maxHeight = el.scrollHeight + 'px';
  el.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    el.style.transition = 'max-height 0.28s ease, opacity 0.2s ease';
    el.style.maxHeight = '0';
    el.style.opacity = '0';
  });
  el.addEventListener('transitionend', done, { once: true });
}
</script>

<template>
  <section class="section" id="projects">
    <SectionHeader
      index="03"
      title="Projects"
      description="Real problems I was given full ownership to solve."
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
          <div class="project-heading">
            <p class="project-date">{{ project.date }}</p>
            <h3>{{ project.title }}</h3>
            <p v-if="project.place" class="project-place">{{ project.place }}</p>
          </div>
        </div>

        <div class="project-content-pane">
          <p class="project-short-description">{{ project.shortDescription }}</p>
          <Transition
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @leave="onLeave"
          >
            <div v-if="expanded.has(index)" class="project-description">
              <template v-if="Array.isArray(project.description)">
                <p v-for="(para, i) in project.description" :key="i">{{ para }}</p>
              </template>
              <p v-else>{{ project.description }}</p>
            </div>
          </Transition>
          <div class="project-footer">
            <div class="project-tags">
              <span class="project-tag" v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
            <div class="project-link-group">
              <button class="project-read-more" @click="toggle(index)">
                {{ expanded.has(index) ? 'Read less' : 'Read more' }}
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true" :style="{ transform: expanded.has(index) ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="project.links?.length" class="project-link-group">
                <a
                  v-for="link in project.links"
                  :key="link.href"
                  :href="link.href"
                  v-bind="link.download ? { download: link.download } : { target: '_blank', rel: 'noopener noreferrer' }"
                  class="project-link-btn"
                >
                  {{ link.label }}
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
