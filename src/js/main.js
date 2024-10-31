import { getParkData, getParkInfoLinks, getInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import {introTemplate, mediaCardTemplate, footerTemplate} from "./templates.mjs";

// const parkData = getParkData();
const parkInfo = getParkInfoLinks();


async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    createMediaCard(links);
    setHeaderFooter(parkData);
    introText(parkData);
    enableNavigation();
}
  

function introText(data){
    console.log(data);
    const intro = document.querySelector('.intro');
    const html = introTemplate(data);
    intro.innerHTML = html;
}

function createMediaCard(data){
    const mediaCards = document.querySelector('.info');
    const html = data.map(mediaCardTemplate);
    mediaCards.innerHTML = html.join('');
}

function enableNavigation(){
    const menuButton = document.querySelector('#global-nav-toggle');

    menuButton.addEventListener('click', (ev) => {
        let target = ev.target;
        console.log("click");
        document.querySelector('.global-nav').classList.toggle('show');

        if (target.tagName != 'BUTTON') {
            target = target.closest('button');
        }
        if (document.querySelector('.global-nav').classList.contains('show')) {
            target.setAttribute('aria-expanded', 'true');
        } else {
            target.setAttribute('aria-expanded', 'false');
        }

        console.log('toggle');
    });
}

init();