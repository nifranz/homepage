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

const MAX_TOOLS_PER_ROW = 7;

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
    <SectionHeader
      index="02"
      title="Tools"
      description="The stack I reach for daily — only things I'd defend in an interview."
    />

    <div class="tool-list">
      <div class="tool-row" v-for="(row, rowIndex) in toolRows" :key="`row-${rowIndex}`">
        <a
          class="tool-pill"
          v-for="(tool, index) in row"
          :key="tool.name"
          :href="tool.link"
          target="_blank"
          rel="noopener noreferrer"
          v-reveal="{
            delay: (rowIndex * MAX_TOOLS_PER_ROW + index) * 45,
            direction: 'up',
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
  </section>
</template>
