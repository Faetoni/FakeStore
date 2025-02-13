<template>
  <v-snackbar
    v-model="open"
    :color="options.color"
    variant="flat"
    style="bottom: 50px"
    :timeout="options.timeout">
    {{ options.text }}
    <template #actions>
      <v-btn
        variant="tonal"
        color="white"
        class="ma-2"
        @click="close">
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useNotificatorStore } from '@/stores/notificator'

  const notificatorStore = useNotificatorStore()

  const { open, options } = storeToRefs(notificatorStore)

  const close = () => {
    notificatorStore.$patch({
      open: false
    })
  }
</script>
