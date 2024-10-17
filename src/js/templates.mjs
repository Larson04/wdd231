function introTemplate(info) {
    return `
    <div class="intro">
      <h1>${info.fullName}</h1>
      <p>${info.description}</p>
    </div>`;
}
function mediaCardTemplate(info) {
    return `
    <div class="media-card">
        <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" class="media-card_img">
        <h3 class="media-card_title">${info.name}</h3>
        </a>
        <p>${info.description}</p>
     </div>`;
}


function getVoicePhone(numbers) {
  const voice = numbers.find((number) => number.type === "Voice");
  return voice.phoneNumber;
}
function footerTemplate(info) {
    const voice = getVoicePhone(info.contacts.phoneNumbers);
  
    return `
    <section class="contact">
    <h3>Contact Info</h3>
    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>
  <img src="images/topo_pattern.png" alt="pattern" class="pattern">`;
}


export {introTemplate, mediaCardTemplate, footerTemplate };

export function alertTemplate(alert){
  let alertType = "";

  switch(alert.category){
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }

  return `
  <li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use></svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div>
</li>
  `
}