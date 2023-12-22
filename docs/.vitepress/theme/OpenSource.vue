<template>
    <div class="">
        <div v-for="item of repositories" :key="item.name" class="text-lg mb-5 cursor-pointer">
            <span  @click="goto(item.repo)" class="tracking-wider hover:text-[var(--vp-home-hero-name-color)]">{{ item.name }}</span>
            <br>
            <span class="text-sm op60 tracking-wider" v-show="item.subtitle">{{ item.subtitle }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
const repositories = [
    { name: 'MIB', repo: 'https://github.com/QC2168/mib', subtitle: '基于ADB开发的Android快速备份工具' },
    { name: 'Vite-plugin-vitepress-auto-sidebar', repo: 'https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar', subtitle: 'Vitepress侧边栏自动生成' },
    { name: 'Vite-plugin-utools', repo: 'https://github.com/QC2168/vite-plugin-utools', subtitle: '高性能构建Utools依赖文件' },
    { name: 'UseCharts', repo: 'https://github.com/QC2168/useCharts', subtitle: '更简单更优雅的使用Echart方案' },
    { name: 'Axios-bz', repo: 'https://github.com/QC2168/axios-bz', subtitle: 'Axios封装方案·无感刷新Token·API集中管理·拦截管理|TS类型保护' },
    { name: 'Utools-plugin-template', repo: 'https://github.com/QC2168/utools-plugin-template', subtitle: 'Utools插件快速开发模板（Vite+Vue3）' },
    { name: 'Code Snippets', repo: 'https://github.com/QC2168/snippets', subtitle: '这些实用的代码片段，使您在开发中得心应手，犹如鱼在水中般自如' }
];

const goto = (url) => {
    window.open(url)
}
</script>
<style lang="less" scoped></style>
