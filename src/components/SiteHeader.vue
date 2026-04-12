<script setup>
defineProps({
  logoSrc: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="site-header">
    <img class="site-logo" :src="logoSrc" alt="Niklas Franz logo" />
    <div class="topbar">
      <nav>
        <a href="#hero">Home</a>
        <a href="#experience">Experience</a>
        <a href="#tools">Tools</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>
