<template>
  <categories-card :category="route.params.id"/>
</template>

<script setup lang="ts">
  import { subjects } from '~/utils/constants/abilities'

  const route = useRoute()

  const productsStore = useProductsStore()

  productsStore.loadCategoryProducts(route.params.id)

  definePageMeta({
    middleware: ['auth', 'ability'],
    action: 'read',
    subject: subjects.PRODUCTS,
    breadcrumb: ['Детали категории']
  })

  onUnmounted(() => productsStore.$reset())
</script>
