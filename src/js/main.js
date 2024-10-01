import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate, footerTemplate } from "./templates.mjs";

const parkData = getParkData();
const parkInfo = getParkInfoLinks();



function createMediaCard(data){
    const mediaCards = document.querySelector('.info');
    const html = data.map(mediaCardTemplate);
    mediaCards.innerHTML = html.join('');
}


createMediaCard(parkInfo);
setHeaderFooter(parkData);