<template>
  <div class="my-4">
    <v-btn
      color="secondary"
      prepend-icon="mdi-arrow-left"
      stacked
      width="35%"
      max-width="150px"
      @click="prevImg()"
    >
      Prev
    </v-btn>
    <v-btn
      color="primary"
      class="mx-2"
      prepend-icon="mdi-download"
      stacked
      :href="imgURL.current"
      target="_blank"
      @click="settings.autoSec = 0"
    >
      DL
    </v-btn>
    <v-btn
      color="success"
      prepend-icon="mdi-arrow-right"
      stacked
      width="35%"
      max-width="150px"
      @click="nextImg()"
    >
      Next
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { prevImg, nextImg } from "@/scripts/operation";
import imgURL from "@/store/imgURL";
import settings from "@/store/settings";
</script>
