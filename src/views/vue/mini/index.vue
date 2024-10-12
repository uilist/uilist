<template>
  <PageWrapper>
    <div class="w-full">
      <div class="w-full !mr-4 enter-y">
        <ProjectCard title="Vue 组件库" class="enter-y" :items="projects" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '@/components/Page';
  import ProjectCard from '@/components/ProjectCard/index.vue';
  import { groupItems } from './data';

  import { useStar } from '@/hooks/web/useStar';

  const { projects, updateStarCount } = useStar(groupItems.value);

  updateStarCount();
</script>
