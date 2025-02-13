<template>
  <v-card :title="product?.title" :subtitle="product?.description">
    <template #prepend>
      <v-skeleton-loader
        v-if="isLoading"
        type="image"
        height="120"
        width="120"/>
      <v-img
        v-else
        :src="product?.image"
        width="120"
        height="120"
        class="mx-2"/>
    </template>

    <template #subtitle>
      <v-skeleton-loader
        v-if="isLoading"
        type="text"/>
      <template v-else>
        {{ product?.category }}
      </template>
      <div>
        <h2 class="pt-2">
          <v-skeleton-loader
            v-if="isLoading"
            type="text"/>
          <template v-else>
            {{ product?.price }} $
          </template>
        </h2>
      </div>
    </template>

    <v-card-text class="pa-8">
      <v-skeleton-loader
        v-if="isLoading"
        type="text"/>
      <template v-else>
        {{ product?.description }}
      </template>
    </v-card-text>

    <v-card-actions justify-end>
      <v-btn
        :loading="isLoading"
        :variant="items.find(_ => _.id === product?.id) ? 'outlined' : 'flat'"
        @click.prevent="() => items.find(_ => _.id === product?.id) ? cartStore.remove(product?.id) : cartStore.add(product)">
        Купить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import type { ProductInterface } from '~/interfaces/Product'

  const { product } = defineProps({
    product: {
      type: Object as PropType<ProductInterface>,
      required: true
    }
  })

  const productsStore = useProductsStore()

  const cartStore = useCartStore()

  const { loading } = storeToRefs(productsStore)

  const { items } = storeToRefs(cartStore)

  const isLoading = computed<boolean>(() => loading.value || !product)
</script>
