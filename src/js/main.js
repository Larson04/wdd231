import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

document.querySelector('title').innerHTML = parkData.fullName;

let disclaimer = document.querySelector('.disclaimer a');

disclaimer.innerHTML = parkData.fullName;
disclaimer.href = parkData.url;


document.querySelector('.hero-banner_title').innerHTML = parkData.name;

document.querySelector('.hero-banner_subtitle span:nth-of-type(1)').innerHTML = parkData.designation;
document.querySelector('.hero-banner_subtitle span:nth-of-type(2)').innerHTML = parkData.states;

let heroBannerImg =document.querySelector('.hero-banner img')
heroBannerImg.src = parkData.images[0].url;
heroBannerImg.alt = parkData.images[0].altText;