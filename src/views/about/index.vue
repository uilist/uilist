<template>
  <div>
    <SvgIcon size="56" name="test" />
    <div> <Icon :icon="icon" /></div>
    <Icon icon="uil:list" />
    <IconPicker v-model:value="icon" />
    <pre><code class="language-javascript">{{ code }}</code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { SvgIcon, IconPicker } from '@/components/Icon';
  import Icon from '@/components/Icon/Icon.vue';
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-tomorrow.css';

  const code = `const hello = "Hello, Vue!";`;
  onMounted(() => {
    Prism.highlightAll();
  });
  const icon = ref('');
</script>

<style scoped lang="scss"></style>
