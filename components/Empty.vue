<template>
  <v-empty-state height="650">
    <template #title>
      <h5 class="text-h3 mb-2 mt-4 font-weight-regular">
        {{ props.title }}
      </h5>
    </template>

    <template #text>
      <div class="text-body-2 text-grey-darken-2 mb-2">
        {{ props.text }}
      </div>
    </template>

    <slot name="actions"/>
  </v-empty-state>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String
    },
    text: {
      type: String
    }
  })
</script>
