<template>
  Спасибо за покупку! С вами свяжутся в течении часа!

  <teleport defer to="#app-dialog-actions">
    <v-btn
      color="secondary"
      :slim="false"
      variant="tonal"
      @click="dialogStore.close()">
      Закрыть
    </v-btn>
  </teleport>
</template>

<script setup lang="ts">
  const dialogStore = useDialogStore()
</script>
