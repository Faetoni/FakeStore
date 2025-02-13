<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="$vuetify.display.mobile ? false : rail"
    width="335"
    rail-width="78"
    class="px-2 border-0"
    expand-on-hover
    elevation="10"
    @update:rail="updateVisible">
    <template #prepend>
      <v-list-item class="pt-4">
        <template #prepend>
          <h2 class="text-primary px-1 cursor-pointer" @click="navigateProducts">
            FS
          </h2>

          <span class="text-no-wrap font-weight-medium text-h5 ps-6">
            Fake Store
          </span>
        </template>

        <template #append>
          <v-icon
            v-if="$vuetify.display.mobile"
            :icon="iconX"
            size="18"
            @click.stop="closeDrawer"/>
          <v-icon
            v-else
            size="18"
            :icon="rail ? iconPin : iconPinFilled"
            @click.stop="switchRail"/>
        </template>
      </v-list-item>
    </template>

    <navigation :drawer-collapsed="isDrawerCollapsed"/>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useDisplay } from 'vuetify'
  import { useAppStore } from '@/stores/app'

  const router = useRouter()

  const { mobile } = useDisplay()

  const appStore = useAppStore()

  const { rail, drawer } = storeToRefs(appStore)

  const { iconPin, iconPinFilled, iconX } = useIcons()

  const isVisible: Ref<boolean> = ref(false)

  const isDrawerCollapsed = computed<boolean>(() => !mobile.value && rail.value && !isVisible.value)

  const updateVisible = value => {
    rail.value && (isVisible.value = !value)
  }

  const switchRail = () => {
    appStore.$patch({
      rail: !rail.value
    })
  }

  const closeDrawer = () => {
    appStore.$patch({
      drawer: false
    })
  }

  const navigateProducts = () => {
    router.push('/products')
  }

  onMounted(() => {
    appStore.$patch({
      drawer: !mobile.value
    })
  })
</script>
