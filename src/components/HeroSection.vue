<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  heroStatus: {
    type: String,
    default: "",
  },
});

const waveEmojiRef = ref(null);
const heroRef = ref(null);
const creditsTypedRef = ref("");
const creditsText = "< developed with ♥ by @nifranz /> ";
const heartIndex = creditsText.indexOf("♥");
const typedBeforeHeart = computed(() => {
  if (creditsTypedRef.value.length <= heartIndex) {
    return creditsTypedRef.value;
  }

  return creditsTypedRef.value.slice(0, heartIndex);
});
const showTypedHeart = computed(
  () => creditsTypedRef.value.length > heartIndex,
);
const typedAfterHeart = computed(() => {
  if (!showTypedHeart.value) {
    return "";
  }

  return creditsTypedRef.value.slice(heartIndex + 1);
});
let waveObserver;
let waveWasVisible = false;
let resizeRafId = null;
let creditsStartTimeoutId = null;
let creditsTypeTimeoutId = null;

function getNextCreditsDelay(previousCharacter) {
  let delay = 55 + Math.floor(Math.random() * 70);

  if (previousCharacter === " ") {
    delay += 60;
  }

  if (
    previousCharacter === "<" ||
    previousCharacter === ">" ||
    previousCharacter === "/"
  ) {
    delay += 85;
  }

  if (previousCharacter === "@") {
    delay += 45;
  }

  return delay;
}

function startCreditsTyping() {
  creditsTypedRef.value = "";
  let cursor = 0;

  const typeNextCharacter = () => {
    creditsTypedRef.value += creditsText[cursor];
    cursor += 1;

    if (cursor >= creditsText.length) {
      creditsTypeTimeoutId = null;
      return;
    }

    const previousCharacter = creditsText[cursor - 1];
    creditsTypeTimeoutId = window.setTimeout(
      typeNextCharacter,
      getNextCreditsDelay(previousCharacter),
    );
  };

  creditsTypeTimeoutId = window.setTimeout(typeNextCharacter, 90);
}

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

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    creditsTypedRef.value = creditsText;
  } else {
    creditsStartTimeoutId = window.setTimeout(startCreditsTyping, 900);
  }

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

  if (creditsStartTimeoutId !== null) {
    clearTimeout(creditsStartTimeoutId);
  }

  if (creditsTypeTimeoutId !== null) {
    clearTimeout(creditsTypeTimeoutId);
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
        <span class="credits-typed">{{ typedBeforeHeart }}</span>
        <span class="heart" :class="{ 'heart-visible': showTypedHeart }"
          >♥</span
        >
        <span class="credits-typed">{{ typedAfterHeart }}</span>
        <span class="credits-caret" aria-hidden="true">█</span>
      </a>
    </div>
  </section>
</template>
