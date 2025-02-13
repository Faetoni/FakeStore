<template>
  <template v-for="(parent, i) in props.items" :key="`parent_${i}`">
    <v-list-group v-if="parent?.children && canViewNavMenu(parent)">
      <template #activator="{ props: activatorProps }">
        <v-list-item
          v-bind="activatorProps"
          :prepend-icon="iconPoint"
          :title="parent.title"
          :style="props.hidePadding ? paddingByDepth(1) : paddingByDepth(props.depth)">
          <template #append="{ isActive }">
            <v-icon size="18" :icon="isActive ? iconChevronUp : iconChevronDown"/>
          </template>
        </v-list-item>
      </template>

      <child
        :items="parent.children"
        :depth="props.depth + 1"
        :hide-padding="props.hidePadding"/>
    </v-list-group>
    <v-list-item
      v-else-if="canViewNavMenu(parent)"
      :title="parent.title"
      :to="parent.to"
      :href="parent?.href"
      :disabled="parent?.disabled"
      :style="props.hidePadding ? paddingByDepth(1) : paddingByDepth(props.depth)">
      <template #prepend>
        <v-badge
          v-if="parent.badge"
          color="red"
          location="top end"
          dot>
          <v-icon :icon="parent.icon"/>
        </v-badge>
        <v-icon v-else :icon="parent.icon"/>
      </template>
    </v-list-item>
  </template>
</template>

<script setup lang="ts">
  import Child from './Child.vue'

  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    depth: {
      type: Number,
      required: true
    },
    hidePadding: {
      type: Boolean,
      required: true
    }
  })

  const { iconChevronUp, iconChevronDown, iconPoint } = useIcons()

  const { paddingByDepth, canViewNavMenu } = useNavigation()
</script>
