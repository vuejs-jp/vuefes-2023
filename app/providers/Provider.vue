<script setup lang="ts">
import UserProvider from '~/providers/UserProvider.vue'
</script>

<template>
  <UserProvider>
    <slot />
  </UserProvider>
</template>
