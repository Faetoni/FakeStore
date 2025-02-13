<template>
  <nuxt-layout>
    <nuxt-page/>
    <notificator/>
  </nuxt-layout>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: title => {
      return `${title}`
    }
  })
</script>
