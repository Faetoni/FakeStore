<template>
  <v-card class="mb-4">
    <v-card-title>
      <v-icon :icon="Object.values(CATEGORIES).find(_ => _.value === category)?.icon" size="40"/>
      {{ category.toUpperCase() }}
    </v-card-title>

    <v-card-text>
      <v-list>
        <v-list-item
          v-for="product in categoryProducts"
          :key="product.id"
          :title="product.title"
          :subtitle="`$ ${product.price}`">
          <template #prepend>
            <v-skeleton-loader
              v-if="isLoading"
              type="image"
              height="80"
              width="80"/>
            <v-img
              v-else
              :src="product.image"
              width="80"
              height="80"
              class="me-4"/>
          </template>

          <template #append>
            <v-btn
              :loading="isLoading"
              :variant="items.find(_ => _.id === product.id) ? 'outlined' : 'flat'"
              @click.prevent="() => items.find(_ => _.id === product.id) ? cartStore.remove(product.id) : cartStore.add(product)">
              Купить
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { useProductsStore } from '~/stores/products'
  import { CATEGORIES } from '~/utils/constants/app'

  const { category } = defineProps({
    category: {
      type: Object,
      required: true
    }
  })

  const productsStore = useProductsStore()

  const cartStore = useCartStore()

  const { categoryProducts, loading } = storeToRefs(productsStore)

  const { items } = storeToRefs(cartStore)

  const isLoading = computed<boolean>(() => loading.value || !categoryProducts.value.length)
</script>
