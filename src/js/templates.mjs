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