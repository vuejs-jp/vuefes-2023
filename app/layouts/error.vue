<script setup lang="ts">
interface ErrorProps {
  error: { statusCode: string }
}
const props = defineProps<ErrorProps>()
</script>

<template>
  <div>
    <nuxt-link to="/" title="トップへ戻る">
      Oooops, something is wrong \ {{ error.statusCode }} / error
    </nuxt-link>
  </div>
</template>
