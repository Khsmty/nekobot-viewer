<template>
  <v-app>
    <v-main>
      <v-row justify="center" class="mt-5 mb-2">
        <h1>NekoBot image viewer</h1>
      </v-row>

      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" style="text-align: center">
            <OperationBtn />

            <v-img :src="imgURL.current" height="80vh" contain>
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="primary" />
                </v-row>
              </template>
            </v-img>
            <v-img :src="imgURL.next" height="0" contain />

            <OperationBtn />
            <Settings />
          </v-col>
        </v-row>
      </v-container>

      <v-dialog v-model="state.rateLimit" width="auto">
        <v-card>
          <v-card-title class="text-h5 mt-3 ml-1">
            Rate limit exceeded
          </v-card-title>
          <v-card-text class="pt-2">
            You have exceeded the rate limit for this endpoint. Please wait a
            few minutes and try again.
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              variant="text"
              @click="state.rateLimit = false"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import imgURL from "@/store/imgURL";
import settings from "@/store/settings";
import state from "@/store/state";
import { initImg, nextImg, prevImg } from "@/scripts/operation";
import OperationBtn from "@/components/OperationBtn.vue";
import Settings from "@/components/Settings.vue";

onMounted(async () => {
  initImg();

  let sec = 0;
  setInterval(() => {
    if (settings.autoSec) {
      sec++;

      if (sec > settings.autoSec) {
        sec = 0;
        nextImg();
      }
    }
  }, 1000);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevImg();
  } else if (e.key === "ArrowRight") {
    nextImg();
  }
});
</script>
