<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
const data = useData();
const { Layout } = DefaultTheme;
const { frontmatter } = data;
</script>

<template>
  <Layout>
    <template #doc-before>
      <div>
        📁 标签
          <span class="tag" v-for="item in frontmatter.tags" :key="item">{{
            item
          }}</span>
      </div>
    </template>

    <template #aside-outline-before>目录</template>
  </Layout>
</template>
<style scoped>
.tag {
  padding: 3px 6px;
  font-size: 10px;
  border-radius: 50px;
  border: 1px solid gray;
}
</style>
