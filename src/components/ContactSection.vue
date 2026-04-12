<script setup>
import { Icon } from "@iconify/vue";
import SectionHeader from "./SectionHeader.vue";

defineProps({
  contacts: {
    type: Array,
    required: true,
  },
});

function isExternalLink(href) {
  return href.startsWith("http://") || href.startsWith("https://");
}
</script>

<template>
  <section class="section" id="contact">
    <SectionHeader index="04" title="Get In Touch" />

    <div class="contact-list">
      <a
        class="contact-card"
        v-for="(contact, index) in contacts"
        :key="contact.label"
        :href="contact.href"
        :target="isExternalLink(contact.href) ? '_blank' : undefined"
        :rel="isExternalLink(contact.href) ? 'noreferrer noopener' : undefined"
        v-reveal="{ delay: index * 90, direction: 'up' }"
      >
        <div class="contact-head">
          <Icon
            class="contact-icon"
            :icon="`simple-icons:${contact.icon}`"
            :style="{ color: contact.color }"
            aria-hidden="true"
          />
          <span>{{ contact.label }}</span>
        </div>
        <strong>{{ contact.title }}</strong>
        <p>{{ contact.description }}</p>
      </a>
    </div>
  </section>
</template>
