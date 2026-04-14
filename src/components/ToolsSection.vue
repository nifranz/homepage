<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import SectionHeader from "./SectionHeader.vue";

const props = defineProps({
  tools: {
    type: Array,
    required: true,
  },
});

const toolCategories = computed(() => {
  const map = new Map();
  for (const tool of props.tools) {
    if (!map.has(tool.category)) map.set(tool.category, []);
    map.get(tool.category).push(tool);
  }
  let globalIndex = 0;
  return Array.from(map.entries()).map(([name, items]) => {
    const labelIndex = globalIndex++;
    const indexedItems = items.map((item) => ({ ...item, revealIndex: globalIndex++ }));
    return { name, items: indexedItems, labelIndex };
  });
});
</script>

<template>
  <section class="section" id="tools">
    <SectionHeader
      index="02"
      title="Tools"
      description="The stack I reach for daily — only things I'd defend in an interview."
    />

    <div class="tool-list">
      <div
        class="tool-category"
        v-for="(category, catIndex) in toolCategories"
        :key="category.name"
      >
        <span class="tool-category-label" v-reveal="{ delay: category.labelIndex * 45, direction: 'left' }">
          {{ category.name }}
        </span>
        <div class="tool-row">
          <a
            class="tool-pill"
            v-for="tool in category.items"
            :key="tool.name"
            :href="tool.link"
            target="_blank"
            rel="noopener noreferrer"
            v-reveal="{
              delay: tool.revealIndex * 45,
              direction: 'left',
            }"
          >
            <Icon
              class="tool-icon"
              :icon="`simple-icons:${tool.icon}`"
              :style="{ color: tool.color }"
              aria-hidden="true"
            />
            <span>{{ tool.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
