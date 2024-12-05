import {setHeaderFooter} from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { setCenterNameTemplate } from "./templates.mjs";


function getParam(param){
    const paramString = location.search;
    const params = new URLSearchParams(paramString);
    return params.get(param);
}

function setGallery(data){
    const galleryHTML = listTemplate(data.images, vcImageTemplate);
//   document.querySelector('vc-gallery').innerHTML = galleryHTML;
}

function setAddress(data){
    const addressHTML = vcAddressesListTemplate(data);
    document.querySelector('.vc-address').innerHTML = addressHTML;
}

function setName(data){
    const titleHTML = setCenterNameTemplate(data);
    document.querySelector('.vc-name').innerHTML = titleHTML;
}


async function innit(){
    const parkData = await getParkData();
    console.log(parkData);
    const visitorCenter = await getParkVisitorCenterDetails(getParam("id"));
    const id = getParam("id");
    console.log(visitorCenter);
    const centerDetails = await getParkVisitorCenterDetails(id);
    console.log(centerDetails);

    setName(centerDetails);
}

innit()