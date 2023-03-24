<template>
  <div class="my-4">
    <v-btn color="secondary" @click="prevImg()">
      <v-icon start>mdi-arrow-left</v-icon> Prev
    </v-btn>
    <v-btn
      color="primary"
      class="mx-2"
      :href="imgURL.current"
      target="_blank"
      @click="settings.autoSec = 0"
    >
      Download
    </v-btn>
    <v-btn color="success" @click="nextImg()">
      Next <v-icon end>mdi-arrow-right</v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { prevImg, nextImg } from "@/scripts/operation";
import imgURL from "@/store/imgURL";
import settings from "@/store/settings";
</script>
