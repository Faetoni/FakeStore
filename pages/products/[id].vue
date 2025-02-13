<template>
  <products-card :product="product"/>
</template>

<script setup lang="ts">
  import { subjects } from '~/utils/constants/abilities'

  const route = useRoute()

  const productsStore = useProductsStore()

  productsStore.loadProduct(route.params.id)

  const { product } = storeToRefs(productsStore)

  definePageMeta({
    middleware: ['auth', 'ability'],
    action: 'read',
    subject: subjects.PRODUCTS,
    breadcrumb: ['Детали товара']
  })

  onUnmounted(() => productsStore.$reset())
</script>
