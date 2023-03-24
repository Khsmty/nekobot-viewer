import { reactive } from "vue";

const imgURL = reactive({
  current: "",
  next: "",
  history: [],
});

export default imgURL;
