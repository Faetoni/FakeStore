<template>
  <cart-list/>
</template>

<script setup lang="ts">
  import { subjects } from '~/utils/constants/abilities'

  definePageMeta({
    middleware: ['auth', 'ability'],
    action: 'read',
    subject: subjects.PRODUCTS,
    breadcrumb: ['Корзина']
  })
</script>
