<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import 'virtual:uno.css'

const data = useData()
const { Layout } = DefaultTheme
const { frontmatter } = data
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
  </Layout>
</template>
<style>

/* 滚动槽 */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0,0,0,0.06);
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0,0,0,0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}


iframe{
  width: 100%;
  height: auto;
  margin: 28px 0;
}
</style>
