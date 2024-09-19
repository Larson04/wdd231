import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

document.querySelector('title').innerHTML = parkData.fullName;

let disclaimer = document.querySelector('.disclaimer a');

disclaimer.innerHTML = parkData.fullName;
disclaimer.href = parkData.url;

// ADJUST AS HTML IS MADE
// document.querySelector('.hero-banner-title').innerHTML = parkData.name;

// let heroBannerImg =document.querySelector('.hero-banner img')
// heroBannerImg.src = parkData.images[0].url;
// heroBannerImg.alt = parkData.images[0].altText;