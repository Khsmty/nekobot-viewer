<template>
  <div class="my-4">
    <v-btn
      color="success"
      prepend-icon="mdi-arrow-left"
      stacked
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
      width="50%"
      max-width="200px"
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
