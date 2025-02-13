<template>
  <v-row>
    <v-col cols="12">
      <h4 class="text-h4 mb-6">
        Домой
      </h4>
      <p class="mb-0">
        В разработке
      </p>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: ['auth']
  })
</script>
