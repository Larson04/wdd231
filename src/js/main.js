import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import {introTemplate, mediaCardTemplate, footerTemplate} from "./templates.mjs";

const parkData = getParkData();
const parkInfo = getParkInfoLinks();


function introText(data){
    const intro = document.querySelector('.intro');
    const html = data(introTemplate);
    intro.innerHTML = html.join('');
}

function createMediaCard(data){
    const mediaCards = document.querySelector('.info');
    const html = data.map(mediaCardTemplate);
    mediaCards.innerHTML = html.join('');
}



createMediaCard(parkInfo);
setHeaderFooter(parkData);
introText(parkData);