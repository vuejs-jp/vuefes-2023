<script lang="ts" setup>
import { useLocale } from '~/composables/useLocale'
import { Path } from '~/types/app'

const props = defineProps({
  path: {
    type: String as PropType<Path>,
    required: true,
  },
  class: {
    type: String,
    default: '',
  },
})

const { docPath } = useLocale(props.path)
</script>

<template>
  <ContentDoc v-slot="{ doc }" :path="docPath" :head="false">
    <ContentRenderer :class="props.class" :value="doc" />
  </ContentDoc>
</template>
