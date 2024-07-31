<template>
  <PageWrapper>
    <div class="w-full">
      <div class="w-full !mr-4 enter-y">
        <ProjectCard :loading="loading" title="Vue 组件库" class="enter-y" :items="groupItems" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { PageWrapper } from '@/components/Page';
  import ProjectCard from '@/components/ProjectCard/index.vue';
  import { groupItems } from './data';
  import { updateProjectsStarCount } from '@/utils/star';

  const loading = ref(true);

  updateProjectsStarCount(groupItems.value)
    .then((updatedProjects) => {
      // 排序项目
      loading.value = false;
      groupItems.value = updatedProjects;
      // groupItems.value = groupItems.value.sort((a, b) => b.star - a.star);
      console.log('Updated projects:', updatedProjects);
    })
    .catch((error) => {
      loading.value = false;
      console.error('Error updating projects:', error);
    });
  loading.value = false;
</script>
