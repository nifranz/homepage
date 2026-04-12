<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const layerRef = ref(null);
let rafId = null;
let isTicking = false;
let lastY = 0;
let lastTime = 0;
let reduceMotion = false;

function updateArtifacts(now = performance.now()) {
  const layer = layerRef.value;
  const root = document.documentElement;

  if (!layer || !root) {
    isTicking = false;
    return;
  }

  const y = window.scrollY || window.pageYOffset || 0;
  const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(Math.max(y / maxScroll, 0), 1);

  const dt = Math.max(now - lastTime, 16);
  const velocity = Math.min(Math.abs(y - lastY) / dt, 1.6);

  const yValue = `${y.toFixed(1)}px`;
  const progressValue = progress.toFixed(4);
  const velocityValue = velocity.toFixed(3);

  root.style.setProperty("--scroll-y", yValue);
  root.style.setProperty("--scroll-progress", progressValue);
  root.style.setProperty("--scroll-velocity", velocityValue);

  layer.style.setProperty("--scroll-y", yValue);
  layer.style.setProperty("--scroll-progress", progressValue);
  layer.style.setProperty("--scroll-velocity", velocityValue);

  lastY = y;
  lastTime = now;
  isTicking = false;
}

function queueUpdate() {
  if (isTicking || reduceMotion) {
    return;
  }

  isTicking = true;
  rafId = requestAnimationFrame(updateArtifacts);
}

function handleResize() {
  if (reduceMotion) {
    return;
  }

  if (rafId !== null) {
    cancelAnimationFrame(rafId);
  }

  rafId = requestAnimationFrame(updateArtifacts);
}

onMounted(() => {
  reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion && layerRef.value) {
    document.documentElement.style.setProperty("--scroll-y", "0px");
    document.documentElement.style.setProperty("--scroll-progress", "0");
    document.documentElement.style.setProperty("--scroll-velocity", "0");
    layerRef.value.style.setProperty("--scroll-y", "0px");
    layerRef.value.style.setProperty("--scroll-progress", "0");
    layerRef.value.style.setProperty("--scroll-velocity", "0");
    return;
  }

  lastY = window.scrollY || 0;
  lastTime = performance.now();
  updateArtifacts(lastTime);

  window.addEventListener("scroll", queueUpdate, { passive: true });
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", queueUpdate);
  window.removeEventListener("resize", handleResize);

  if (rafId !== null) {
    cancelAnimationFrame(rafId);
  }
});
</script>

<template>
  <div ref="layerRef" class="scroll-artifacts" aria-hidden="true">
    <span class="artifact artifact-micro-sphere artifact-micro-sphere-1"></span>
    <span class="artifact artifact-micro-sphere artifact-micro-sphere-2"></span>
    <span class="artifact artifact-micro-sphere artifact-micro-sphere-3"></span>
    <span class="artifact artifact-micro-sphere artifact-micro-sphere-4"></span>
    <span class="artifact artifact-orbit-node artifact-orbit-node-1"></span>
    <span class="artifact artifact-orbit-node artifact-orbit-node-2"></span>
    <span class="artifact artifact-orbit-node artifact-orbit-node-3"></span>
    <span class="artifact artifact-orbit-node artifact-orbit-node-4"></span>
    <span class="artifact artifact-foreground-ring artifact-foreground-ring-1"></span>
    <span class="artifact artifact-foreground-ring artifact-foreground-ring-2"></span>
    <span class="artifact artifact-sphere-halo"></span>
    <span class="artifact artifact-sphere-core"></span>
    <span class="artifact artifact-sphere-shade"></span>
    <span class="artifact artifact-sphere-grid"></span>
    <span class="artifact artifact-orbit artifact-orbit-1"></span>
    <span class="artifact artifact-orbit artifact-orbit-2"></span>
    <span class="artifact artifact-space-grain"></span>
  </div>
</template>
