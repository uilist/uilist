<template>
  <Card :title="title" v-bind="$attrs">
    <CardGrid v-for="item in items" :key="item.title" class="!md:w-1/4 !w-full flex flex-col">
      <span class="flex">
        <Icon
          :icon="item.icon || 'cil:smile'"
          :color="item.color"
          size="30"
          v-if="!item.icon.startsWith('http')"
        />
        <img :src="item.icon" v-else style="width: 30px" />
        <span class="text-lg ml-4">{{ item.title }}</span>
      </span>
      <div class="flex-1 flex mt-2 text-secondary">{{ item.desc }}</div>
      <div class="flex justify-between mt-2 text-secondary">
        <div class="flex items-center cursor-pointer" @click="go(item.site)">
          <Icon
            icon="dashicons:admin-site-alt3"
            :color="item.color"
            class="align-middle"
            size="13"
          />
          <span class="ml-1" :style="{ color: item.color }">{{ item.group }}</span>
        </div>
        <div class="flex items-center items-self-end">
          <Icon
            class="ml-4 cursor-pointer"
            icon="carbon:logo-github"
            :color="item.color"
            size="18"
            @click="go(item.github)"
          />
          <Icon
            class="ml-2"
            icon="meteocons:star-fill"
            :color="item.color"
            size="28"
            @click="go(item.github)"
          />
          <span class="min-w-10" :style="{ color: item.color }">{{ item.star || '--' }}</span>
        </div>
      </div>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
  import { Card, CardGrid } from 'ant-design-vue';
  import Icon from '@/components/Icon/Icon.vue';

  interface GroupItem {
    title: string;
    icon: string;
    color: string;
    desc: string;
    group: string;
    github: string;
    star: number;
    site: string;
  }
  defineProps({
    items: {
      type: Array<GroupItem>,
      default: () => [],
    },
    title: {
      type: String,
      default: '项目',
    },
  });
  const go = (url) => {
    window.open(url);
  };
</script>
