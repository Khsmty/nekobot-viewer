<template>
  <v-row justify="center">
    <v-card class="my-8" style="width: 300px">
      <template v-slot:title>Settings</template>
      <template v-slot:text>
        <v-select
          v-model="settings.imgType"
          :items="imgTypes"
          label="type"
          @update:modelValue="initImg()"
        />
        <v-select
          v-model="settings.autoSec"
          :items="autoSecs"
          label="auto (sec)"
          hide-details
          @update:modelValue="nextImg()"
        />
      </template>
    </v-card>
  </v-row>
</template>

<script setup lang="ts">
import settings, { imgTypes, autoSecs } from "@/store/settings";
import { nextImg, initImg } from "@/scripts/operation";
</script>
