<template>
  <div class="d-flex h-100">
    <v-row class="h-100 align-center">
      <v-col class="align-content-center justify-center d-flex">
        <h1 class="text-primary">
          Fake Store
        </h1>
      </v-col>
      <v-col cols="auto" class="h-100">
        <v-card width="400" class="h-100">
          <v-card-text class="h-100 px-16">
            <div class="d-flex justify-center align-center h-100">
              <v-row>
                <v-col cols="12">
                  <div class="text-h5 mb-4 text-center">
                    Вход в Fake Store
                  </div>
                </v-col>
                <v-col cols="12">
                  <v-btn block class="mt-5" @click="login">
                    Вход
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/stores/user'

  const router = useRouter()

  const userStore = useUserStore()

  const login = async () => {
    await userStore.login()

    await router.push('/products')
  }

  definePageMeta({
    layout: 'blank'
  })
</script>
