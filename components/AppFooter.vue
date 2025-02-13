<template>
  <v-footer
    style="background-color: #fbfcfd"
    class="flex-grow-0"
    height="60">
    <v-container tag="section">
      <v-row align="center">
        <v-spacer class="hidden-sm-and-down"/>
        <v-col
          cols="12"
          md="auto">
          <div class="text-center text-grey-darken-1">
            &copy;
            {{ new Date().getFullYear() }} {{ copyright }} Все права защищены.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  const { copyright } = useApp()
</script>
