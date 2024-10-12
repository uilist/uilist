<template>
  <div>
    <SvgIcon size="56" name="test" />
    <div> <Icon :icon="icon" /></div>
    <Icon icon="uil:list" />
    <IconPicker v-model:value="icon" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { SvgIcon, IconPicker } from '@/components/Icon';
  import Icon from '@/components/Icon/Icon.vue';

  const icon = ref('');
</script>

<style scoped lang="scss"></style>
