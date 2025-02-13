<template>
  <template v-for="(child, i) in props.items" :key="`parent_${i}`">
    <v-list-group v-if="child?.children && canViewNavMenu(child)">
      <template #activator="{ props: activatorProps }">
        <v-list-item
          v-bind="activatorProps"
          :prepend-icon="iconPoint"
          :title="child.title"
          :style="props.hidePadding ? paddingByDepth(1) : paddingByDepth(props.depth)">
          <template #append="{ isActive }">
            <v-icon size="18" :icon="isActive ? iconChevronUp : iconChevronDown"/>
          </template>
        </v-list-item>
      </template>

      <parent
        :items="child.children"
        :depth="props.depth + 1"
        :hide-padding="props.hidePadding"/>
    </v-list-group>
    <v-list-item
      v-else-if="canViewNavMenu(child)"
      :prepend-icon="child.icon"
      :title="child.title"
      :to="child.to"
      :href="child?.href"
      :disabled="child?.disabled"
      :style="props.hidePadding ? paddingByDepth(1) : paddingByDepth(props.depth)">
      <template #prepend>
        <v-badge
          v-if="child.badge"
          color="red"
          location="top end"
          dot>
          <v-icon :icon="child.icon"/>
        </v-badge>
        <v-icon v-else :icon="child.icon"/>
      </template>
    </v-list-item>
  </template>
</template>

<script setup lang="ts">
  import Parent from './Parent.vue'

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
