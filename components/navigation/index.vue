<template>
  <div
    v-for="(section, i) in sectionsWithBadges"
    :key="`section_${i}`">
    <p
      v-if="canViewNavMenu({ children: section.items })"
      :class="{ 'pt-5': i !== 0 }"
      class="text-body-2 px-4 pt-3 text-grey-darken-2">
      <v-divider v-if="props.drawerCollapsed" style="margin-bottom: 10px; margin-top: 9px"/>
      <span v-else class="text-no-wrap text-uppercase">{{ section.title }}</span>
    </p>

    <v-list
      density="compact"
      color="primary"
      variant="flat"
      open-strategy="single"
      class="navigation-list px-3"
      nav>
      <parent
        :items="section.items"
        :depth="1"
        :hide-padding="props.drawerCollapsed"/>
    </v-list>
  </div>
</template>

<script setup lang="ts">
  import Parent from './Parent.vue'
  import { useUserStore } from '@/stores/user'

  const props = defineProps({
    drawerCollapsed: {
      type: Boolean,
      required: true
    }
  })

  const { sections } = useNavigation()

  const { canViewNavMenu } = useNavigation()

  const store = useUserStore()

  const { data } = storeToRefs(store)

  const sectionsWithBadges = computed(() => {
    sections.forEach(section => {
      if (section.title === 'Разделы') {
        section.items.forEach(item => {
          if (item.title === safetyRulesMenuTitle) {
            item.badge = Boolean(data.value?.safetyRulesNotAcceptedCount)
          }
        })
      }
    })

    return sections
  })
</script>

<style lang="scss">
.navigation-list.v-list {
  .v-list-item--active {
    .v-list-item__overlay {
      opacity: 0 !important;
    }
  }

  .v-list-item__spacer {
    width: 14px !important;
  }

  .v-list-group__header.v-list-item--active{
    background-color: rgba(204, 204, 204, 0.22) !important;
    color: #2f2b3de0 !important;
  }

  .v-list-group__items .v-list-item {
    transition: all .3s ease-out;
  }
}
</style>
