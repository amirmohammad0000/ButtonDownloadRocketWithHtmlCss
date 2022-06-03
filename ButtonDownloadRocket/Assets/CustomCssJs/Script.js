"use strict";

let SectionInnerButtonDownloadRocket = document.querySelector(
  ".section_inner_button_download_rocket"
);
let ImageSectionInnerButtonDownloadRocket = document.querySelector(
  ".image_section_inner_button_download_rocket"
);

SectionInnerButtonDownloadRocket.addEventListener("click", () => {
  ImageSectionInnerButtonDownloadRocket.style.animation =
    "SetAnimationRocket 5s";
  setTimeout(() => {
    ImageSectionInnerButtonDownloadRocket.style.animation = "";
  }, 5100);
});
