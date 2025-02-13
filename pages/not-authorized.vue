<template>
  <div class="d-flex h-100 justify-center align-center">
    <div class="text-center pb-16">
      <h1 class="mb-2 mx-2 font-weight-light" style="line-height: 6rem;font-size: 6rem;">
        401
      </h1>
      <h4 class="text-h4 font-weight-medium mb-2">
        Вы не авторизованы! 🔐
      </h4>
      <p>Нет прав доступа для просмотра этой страницы!</p>
      <v-btn to="/dashboard" class="mt-6">
        Вернуться на Главную
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'blank'
  })
</script>
