<template>
  <v-dialog
    :width="$vuetify.display.smAndDown && !width ? 'auto' : width"
    :model-value="visible"
    persistent
    scrollable
    no-click-animation
    @update:model-value="dialogStore.close()">
    <v-card>
      <v-card-item class="text-center">
        <v-card-title class="text-h5 my-4">
          {{ title }}
        </v-card-title>
        <p v-if="subtitle" class="mb-0 font-weight-medium text-primary">
          {{ subtitle }}
        </p>
      </v-card-item>

      <v-card-text class="px-14">
        <component :is="component"/>
      </v-card-text>

      <div id="app-dialog-errors"/>

      <v-card-actions>
        <!--        This tag is the target for Teleport component with action buttons -->
        <div id="app-dialog-actions" class="d-flex ga-1 justify-center w-100 py-7"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  const dialogStore = useDialogStore()

  const { visible, component, title, subtitle, width } = storeToRefs(dialogStore)
</script>
