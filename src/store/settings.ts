import { reactive } from "vue";

const imgTypes = [
  "hass",
  "hmidriff",
  "pgif",
  "4k",
  "hentai",
  "holo",
  "hneko",
  "neko",
  "hkitsune",
  "kemonomimi",
  "anal",
  "hanal",
  "gonewild",
  "kanna",
  "ass",
  "pussy",
  "thigh",
  "hthigh",
  "gah",
  "coffee",
  "food",
  "paizuri",
  "tentacle",
  "boobs",
  "hboobs",
  "yaoi",
];
const autoSecs = [0, 3, 5, 10, 15, 20, 30, 45, 60];

const imgURL = reactive({
  autoSec: 0,
  imgType: "neko",
});

export default imgURL;
export { imgTypes, autoSecs };
