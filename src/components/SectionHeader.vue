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
});
</script>

<template>
  <div class="section-head">
    <span>{{ index }}</span>
    <h2>{{ title }}</h2>
  </div>
</template>
