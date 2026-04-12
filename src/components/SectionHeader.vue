<script setup>
defineProps({
  index: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="section-head">
    <div class="section-title-row">
      <span>{{ index }}</span>
      <h2>{{ title }}</h2>
    </div>
    <p v-if="description" class="section-subtitle">{{ description }}</p>
  </div>
</template>
