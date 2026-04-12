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

const MAX_TOOLS_PER_ROW = 6;

const toolRows = computed(() => {
  const rows = [];
  for (let i = 0; i < props.tools.length; i += MAX_TOOLS_PER_ROW) {
    rows.push(props.tools.slice(i, i + MAX_TOOLS_PER_ROW));
  }
  return rows;
});
</script>

<template>
  <section class="section" id="tools">
    <SectionHeader index="02" title="Tools" />

    <div class="tool-list">
      <div class="tool-row" v-for="(row, rowIndex) in toolRows" :key="`row-${rowIndex}`">
        <span
          class="tool-pill"
          v-for="(tool, index) in row"
          :key="tool.name"
          v-reveal="{ delay: (rowIndex * 6 + index) * 45, direction: 'up' }"
        >
          <Icon
            class="tool-icon"
            :icon="`simple-icons:${tool.icon}`"
            :style="{ color: tool.color }"
            aria-hidden="true"
          />
          <span>{{ tool.name }}</span>
        </span>
      </div>
    </div>
  </section>
</template>
