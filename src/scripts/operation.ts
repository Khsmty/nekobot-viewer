import imgURL from "@/store/imgURL";
import settings from "@/store/settings";
import state from "@/store/state";

export const getImgURL = async () => {
  const api = await fetch(
    `https://nekobot.xyz/api/image?type=${settings.imgType}`
  ).catch(() => {
    state.rateLimit = true;
    settings.autoSec = 0;
  });

  const res = await api?.json();
  return res.message;
};

export const initImg = async () => {
  imgURL.current = "";
  imgURL.next = "";

  nextImg();
};

export const prevImg = () => {
  settings.autoSec = 0;
  imgURL.next = imgURL.current;
  imgURL.current = imgURL.history.shift() || "";
};

export const nextImg = async () => {
  imgURL.history.unshift(imgURL.current as never);

  if (imgURL.next) {
    imgURL.current = "";
    imgURL.current = imgURL.next;
    imgURL.next = "";
  } else {
    imgURL.current = await getImgURL();
  }

  imgURL.next = await getImgURL();
};
