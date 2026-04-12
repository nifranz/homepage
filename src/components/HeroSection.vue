<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const waveEmojiRef = ref(null);
const heroRef = ref(null);
let waveObserver;
let waveWasVisible = false;
let resizeRafId = null;

function syncHeroOffset() {
  if (!heroRef.value) {
    return;
  }

  heroRef.value.style.setProperty(
    "--hero-offset",
    `${heroRef.value.offsetTop}px`,
  );
}

function handleResize() {
  if (resizeRafId !== null) {
    cancelAnimationFrame(resizeRafId);
  }

  resizeRafId = requestAnimationFrame(() => {
    syncHeroOffset();
    resizeRafId = null;
  });
}

onMounted(() => {
  syncHeroOffset();
  window.addEventListener("resize", handleResize);

  if (!waveEmojiRef.value) {
    return;
  }

  waveObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;

      if (isVisible && !waveWasVisible && waveEmojiRef.value) {
        const emoji = waveEmojiRef.value;
        emoji.classList.remove("wave-once");
        requestAnimationFrame(() => {
          emoji.classList.add("wave-once");
        });
      }

      waveWasVisible = isVisible;
    },
    { threshold: [0, 0.35, 1] },
  );

  waveObserver.observe(waveEmojiRef.value);
});

onBeforeUnmount(() => {
  waveObserver?.disconnect();
  window.removeEventListener("resize", handleResize);
  if (resizeRafId !== null) {
    cancelAnimationFrame(resizeRafId);
  }
});
</script>

<template>
  <section ref="heroRef" class="hero" id="hero">
    <div class="hero-copy">
      <div class="hero-kicker hero-part hero-part-1">
        <img
          ref="waveEmojiRef"
          class="wave-emoji"
          src="https://em-content.zobj.net/thumbs/160/apple/354/waving-hand_1f44b.png"
          alt="Waving hand"
          width="28"
          height="28"
        />
        <span>Hi, I am</span>
      </div>
      <h1 class="hero-part hero-part-2">
        {{ name }}<span style="font-size: 70pt; font-weight: lighter">,</span>
      </h1>
      <p class="hero-part hero-part-3">{{ description }}</p>
    </div>
    <div class="hero-location" aria-label="Location">
      <span>based in</span>
      <strong>Berlin</strong>
    </div>
    <div class="credits">
      <a
        class="credits-link"
        href="https://github.com/nifranz"
        target="_blank"
        rel="noopener noreferrer"
      >
        &lt; developed with <span class="heart" aria-hidden="true">♥</span> by
        <span class="github-link">
          <Icon
            class="github-icon"
            icon="simple-icons:github"
            aria-hidden="true"
          />@nifranz
        </span>
        / &gt;
      </a>
    </div>
  </section>
</template>
