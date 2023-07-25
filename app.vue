<script setup lang="ts">
useHead({
  titleTemplate: (page) => {
    return `${page}` + '1234'
  }
})
</script>

<template>
  <RouterView />
</template>
