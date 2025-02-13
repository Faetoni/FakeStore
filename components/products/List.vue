<template>
  <v-card>
    <v-card-text>
      <v-list>
        <template v-if="loading">
          <v-skeleton-loader
            v-for="i in 6"
            :key="`loader_${i}`"
            type="list-item"
            height="88"/>
        </template>
        <template v-else-if="!products.length">
          <empty text="Нет данных."/>
        </template>
        <template v-else>
          <v-list-item
            v-for="product in products"
            :key="product.id"
            :to="`/products/${product.id}`">
            <template #prepend>
              <v-img
                :src="product.image"
                width="80"
                height="80"
                class="me-4"/>
            </template>

            <template #title>
              {{ product?.title }}
            </template>

            <template #subtitle>
              <v-btn :to="`/products/category/${product.category}`" variant="text">
                <v-icon
                  :icon="Object.values(CATEGORIES).find(_ => _.value === product.category)?.icon"
                  size="20"
                  class="me-2"/>
                {{ `${product.category.toUpperCase() }` }}
              </v-btn>
            </template>

            <template #append>
              <h3 class="pe-3">
                $ {{ product.price }}
              </h3>
              <v-btn
                :loading="loading"
                :variant="items.find(_ => _.id === product.id) ? 'outlined' : 'flat'"
                @click.prevent="() => items.find(_ => _.id === product.id) ? cartStore.remove(product.id) : cartStore.add(product)">
                Купить
              </v-btn>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { useCartStore } from '~/stores/cart'
  import { CATEGORIES } from '~/utils/constants/app'

  const store = useProductsStore()
  const cartStore = useCartStore()

  const { products, loading } = storeToRefs(store)
  const { items } = storeToRefs(cartStore)
</script>
