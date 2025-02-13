<template>
  <v-app-bar elevation="0" height="78" style="background-color: #fbfcfd">
    <v-container fluid>
      <v-row class="align-center flex-nowrap">
        <v-col v-if="$vuetify.display.mobile" cols="auto" class="pe-0">
          <v-btn
            :icon="iconMenu2"
            color="grey-600"
            size="small"
            variant="text"
            @click="switchNavigation"/>
        </v-col>
        <v-col v-if="$vuetify.display.smAndUp" cols="auto">
          <v-breadcrumbs
            :items="breadcrumb"
            class="py-3 text-grey-darken-1 ps-1">
            <template #title="{ item, index }">
              <template v-if="(breadcrumb.length - 1) === index">
                <span class="font-weight-medium text-primary">
                  {{ item?.title }}
                </span>
              </template>
              <template v-else>
                {{ item?.title }}
              </template>
            </template>
            <template #divider>
              <v-icon size="8" :icon="iconPoint"/>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="auto" class="ml-auto align-center d-flex">
          <v-badge
            :model-value="Boolean(cartItemsCount)"
            :content="cartItemsCount"
            offset-y="8"
            offset-x="6"
            class="pe-4">
            <v-btn
              :icon="iconShoppingCart"
              color="base"
              size="small"
              variant="text"
              to="/cart"/>
          </v-badge>

          <v-avatar
            color="primary"
            size="48"
            tile
            rounded
            variant="tonal"
            class="ms-2 cursor-pointer">
            <v-menu
              v-model="openedMenu"
              activator="parent"
              location="bottom end"
              offset="14px"
              :close-on-content-click="false"
              width="300">
              <v-card>
                <v-card-text>
                  <div class="d-flex">
                    <v-avatar
                      color="primary"
                      size="55"
                      tile
                      rounded
                      variant="tonal">
                      <span class="font-weight-medium" style="font-size: 1.1rem">{{ avatarText(userName) }}</span>
                    </v-avatar>
                    <v-list-item>
                      <v-list-item-title class="font-weight-medium">
                        {{ userName }}
                      </v-list-item-title>
                    </v-list-item>
                  </div>

                  <div class="mt-4">
                    <div>
                      <v-icon size="18" :icon="iconMail"/>
                      <span class="ps-1 text-body-2">{{ data?.email }}</span>
                    </div>
                  </div>

                  <v-btn
                    block
                    size="small"
                    class="mt-5"
                    @click="logout">
                    Выход
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-menu>
            <span class="font-weight-medium" style="font-size: .9rem">{{ avatarText(userName) }}</span>
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { useAuth } from '../composables/useAuth'
  import { useAppStore } from '@/stores/app'
  import { useUserStore } from '@/stores/user'
  import { useCartStore } from '@/stores/cart'

  const { iconMenu2, iconMail, iconPoint, iconShoppingCart } = useIcons()

  const { avatarText } = useFormatters()

  const userStore = useUserStore()

  const appStore = useAppStore()

  const cartStore = useCartStore()

  const { logout } = useAuth()

  const { data } = storeToRefs(userStore)

  const { breadcrumb } = storeToRefs(appStore)

  const { cartItemsCount } = storeToRefs(cartStore)

  const userName = computed<string>(() => `${data.value?.lastName} ${data.value?.firstName}`)

  const openedMenu = ref(false)

  const switchNavigation = () => {
    appStore.$patch({
      drawer: true
    })
  }
</script>
