import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function setHeaderInfo(data){
    // disclaimer park name and link
    document.querySelector('title').innerHTML = data.fullName;
    let disclaimer = document.querySelector('.disclaimer a');
    disclaimer.innerHTML = data.fullName;
    disclaimer.href = data.url;

    // site title
    document.querySelector('.hero-banner_title').innerHTML = data.name;

    // hero banner subtitle
    document.querySelector('.hero-banner_subtitle span:nth-of-type(1)').innerHTML = data.designation;
    document.querySelector('.hero-banner_subtitle span:nth-of-type(2)').innerHTML = data.states;

    // hero banner image and link
    let heroBannerImg =document.querySelector('.hero-banner img')
    heroBannerImg.src = data.images[0].url;
    heroBannerImg.alt = data.images[0].altText;
}

setHeaderInfo(parkData);



function mediaCardTemplate(info){

    return `
    <div class="media-card">
        <img src="${info.images[0].url}" alt="${info.images[0].altText}" />
        <div class="media-card_content">
            <h3>${info.fullName}</h3>
            <p>${info.description}</p>
        </div>
    </div>
    `
}

