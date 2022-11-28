<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
const data = useData();
const { Layout } = DefaultTheme;
const { frontmatter } = data;
</script>

<template>
  <Layout>
    <template v-if="frontmatter?.tags?.length" #doc-before>
      <div>📁 标签</div>
      <div class="flex mt-2">
        <span
          v-for="item in frontmatter.tags"
          :key="item"
          class="text-xs mr-2 inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded"
          >{{ item }}</span
        >
      </div>
    </template>

    <template #aside-outline-before>目录</template>
  </Layout>
</template>
<style scoped>
@import "./index.css";
</style>
