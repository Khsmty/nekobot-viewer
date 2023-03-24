<template>
  <v-expansion-panels class="my-10">
    <v-expansion-panel title="Settings" ripple style="max-width: 300px;">
      <v-expansion-panel-text>
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
          @update:modelValue="nextImg()"
        />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import settings, { imgTypes, autoSecs } from "@/store/settings";
import { nextImg, initImg } from "@/scripts/operation";
</script>
