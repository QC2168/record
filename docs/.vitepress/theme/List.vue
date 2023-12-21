<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-[80%]">
      <div v-for="item of posts" :key="item.regularPath" @click="goto(item.regularPath)"
        class="text-lg mb-4 cursor-pointer">
        <span class="tracking-wider">{{ item.frontMatter.title }}</span>
        <span class="ml-3 text-sm op40">阅读约{{ item.frontMatter.readTime }}分钟</span>
      </div>
      <div class="text-lg mb-4 cursor-pointer">
        <span class="tracking-wider">关注我😉 了解更多...</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useData, withBase, useRouter } from 'vitepress'
import { PostItem } from '../config'
const { theme } = useData()
const posts = ref<PostItem[]>([])

onMounted(() => {
  posts.value = theme.value.post
})
const router = useRouter()
const goto = (url) => {
  const path = withBase(url)
  router.go(path)
}



</script>
<style lang="less" scoped></style>
