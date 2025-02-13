<template>
  <v-fade-transition>
    <v-app>
      <drawer/>
      <app-header/>
      <v-main>
        <v-container style="padding-top: 1px" fluid>
          <slot/>
        </v-container>
        <app-dialog/>
      </v-main>
      <app-footer/>
    </v-app>
  </v-fade-transition>
</template>
