<template>
  <div>
    <div v-for="item in nav" :key="item.link">
      <h3 v-if="item.items" class="title pb-2">{{ item.text }}</h3>
      <div v-else class="mt-0.5">
        <a :href="item.link">{{ item.text }}</a>
      </div>
      <div class="mt-0.5" v-for="subItem in item.items" :key="subItem.link">
        <a :href="subItem.link">{{ subItem.text }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

type GroupItemType = {
  text?: string;
  link?: string;
}

interface GroupType extends GroupItemType {
  items: GroupItemType[];
}

defineProps<{
  nav: GroupType | GroupType[]
}>();

</script>


<style lang="less" scoped>

</style>
