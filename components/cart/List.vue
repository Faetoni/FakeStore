<template>
  <template v-if="!items.length">
    <empty text="В корзине пусто."/>
  </template>
  <template v-else>
    <v-card
      v-for="product in items"
      :key="product.id"
      class="mb-3">
      <v-card-text>
        <v-list-item
          :title="product.title"
          :subtitle="`$ ${product.price}`">
          <template #prepend>
            <v-img
              :src="product.image"
              width="80"
              height="80"
              class="me-4"/>
          </template>

          <template #append>
            <v-text-field
              v-model="product.count"
              density="comfortable"
              style="width: 80px"
              size="x-small"
              type="number"
              class="me-3"
              hide-details
              @update:model-value="cartStore.changeCount(product, $event)"/>
            <v-btn
              :icon="iconTrashX"
              variant="text"
              color="primary"
              size="small"
              @click="cartStore.remove(product.id)"/>
          </template>
        </v-list-item>
      </v-card-text>
    </v-card>

    <div class="d-flex justify-end align-center mt-6">
      <span class="text-h5 pe-6">Итого: $ {{ cartItemsTotalPrice.toFixed(2) }}</span>
      <v-btn @click="dialogStore.open(Show, { title: 'Покупка оформлена!', width: 400 })">
        Оформить заказ
      </v-btn>
    </div>
  </template>
</template>

<script setup lang="ts">
  import Show from './dialog/Show.vue'
  import { useCartStore } from '~/stores/cart'

  const cartStore = useCartStore()

  const dialogStore = useDialogStore()

  const { items, cartItemsTotalPrice } = storeToRefs(cartStore)

  const { iconTrashX } = useIcons()
</script>
