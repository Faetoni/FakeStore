<template>
  <v-fade-transition>
    <v-app>
      <v-main>
        <v-container class="h-100">
          <slot/>
        </v-container>
      </v-main>
    </v-app>
  </v-fade-transition>
</template>
