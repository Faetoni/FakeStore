<template>
  <products-list/>
</template>

<script setup lang="ts">
  import { subjects } from '~/utils/constants/abilities'

  const productsStore = useProductsStore()

  onMounted(() => {
    productsStore.initialize()
  })

  onUnmounted(() => productsStore.$reset())

  definePageMeta({
    middleware: ['auth', 'ability'],
    action: 'read',
    subject: subjects.PRODUCTS,
    breadcrumb: ['Список продуктов и категорий']
  })
</script>
