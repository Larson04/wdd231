import {getParkData, getAlerts} from "./parkService.mjs";
import {alertTemplate} from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs";




function setAlerts(alerts){
    const alertContainer = document.querySelector('.alert-list');
    alertContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertContainer.insertAdjacentHTML('beforeend', html.join(''));
}



async function init() {
    const parkData = await getParkData();
    console.log(parkData);
    const alerts = await getAlerts(parkData.parkCode);
    console.log(alerts);
    setHeaderFooter(parkData);
    setAlerts(alerts);
} 

init();