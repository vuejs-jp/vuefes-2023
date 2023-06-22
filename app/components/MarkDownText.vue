<script lang="ts" setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: '',
  },
})

const { locale } = useI18n({ useScope: 'global' })
const docPath = computed(() => {
  return `/${locale.value}/${props.path}`
})
</script>

<template>
  <ContentDoc v-slot="{ doc }" :path="docPath">
    <ContentRenderer :class="props.class" :value="doc" />
  </ContentDoc>
</template>
