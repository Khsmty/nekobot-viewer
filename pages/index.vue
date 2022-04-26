<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" style="text-align: center">
      <v-btn color="secondary" @click="prevImage()">
        <v-icon>mdi-arrow-left</v-icon> Prev
      </v-btn>
      <a :href="imgURL" target="_blank">
        <v-btn color="primary">Download</v-btn>
      </a>
      <v-btn color="success" @click="nextImage()">
        Next <v-icon>mdi-arrow-right</v-icon>
      </v-btn>

      <div style="margin: 1rem 0"></div>

      <v-img :src="imgURL" height="80vh" contain>
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="#5865F2"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <div style="margin: 1rem 0"></div>

      <v-btn color="secondary" @click="prevImage()">
        <v-icon>mdi-arrow-left</v-icon> Prev
      </v-btn>
      <a :href="imgURL" target="_blank">
        <v-btn color="primary">Download</v-btn>
      </a>
      <v-btn color="success" @click="nextImage()">
        Next <v-icon>mdi-arrow-right</v-icon>
      </v-btn>

      <div style="margin: 1rem 0"></div>

      <v-select
        v-model="currentType"
        :items="types"
        label="type"
        @change="changeType()"
      ></v-select>
      <v-select
        v-model="autoSec"
        :items="auto"
        label="auto (sec)"
        @change="nextImage()"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      imgURL: null,
      nextImgURL: null,
      history: [],
      currentType: 'neko',
      types: [
        'hass',
        'hmidriff',
        'pgif',
        '4k',
        'hentai',
        'holo',
        'hneko',
        'neko',
        'hkitsune',
        'kemonomimi',
        'anal',
        'hanal',
        'gonewild',
        'kanna',
        'ass',
        'pussy',
        'thigh',
        'hthigh',
        'gah',
        'coffee',
        'food',
        'paizuri',
        'tentacle',
        'boobs',
        'hboobs',
        'yaoi',
      ],
      autoSec: 0,
      auto: [0, 3, 5, 10, 15, 20, 30, 45, 60],
    };
  },
  async created() {
    this.imgURL = await this.getImageURL();
    this.nextImgURL = await this.getImageURL();

    let sec = 0;
    setInterval(() => {
      if (this.autoSec) {
        sec++;
        if (sec >= this.autoSec) {
          sec = 0;
          this.nextImage();
        }
      }
    }, 1000);
  },
  methods: {
    async nextImage() {
      this.autoSec = 0;

      this.history.unshift(this.imgURL);

      if (this.nextImgURL) {
        this.imgURL = null;
        this.imgURL = this.nextImgURL;
        this.nextImgURL = null;
      } else {
        this.imgURL = await this.getImageURL();
      }

      this.nextImgURL = await this.getImageURL();
    },
    prevImage() {
      this.autoSec = 0;

      this.nextImgURL = this.imgURL;
      this.imgURL = this.history.shift();
    },
    changeType() {
      this.nextImgURL = null;
      this.nextImage();
    },
    async getImageURL() {
      const img = await this.$axios.get(
        `https://nekobot.xyz/api/image?type=${this.currentType}`
      );

      return img.data.message;
    },
  },
};
</script>
