import { getDataWeapons } from "./getDataWeapons.js";
import { getDataArmors } from "./getDataArmors.js";
import { getDataTalismans } from "./getTalismans.js";
import { getDataBosses } from "./getDataBosses.js";

const container = document.querySelector('.container');

async function callWeapons() {
    const pages = await getDataWeapons.getNumberPages();
    const dataFromApi = await getDataWeapons.getData(pages);

    dataFromApi.forEach(information => {
        information.forEach(info => {
            let card = document.createElement('div');
            card.classList.add('card');
            let cardName = document.createElement('p');
            let cardNameText = document.createTextNode(info.name);
            cardName.appendChild(cardNameText);
            cardName.classList.add('cardTitle');
            card.appendChild(cardName);
            let cardImage = document.createElement('img');
            cardImage.src = `${info.image}`;
            card.appendChild(cardImage);
            let cardDescription = document.createElement('p');
            let cardDescriptionText = document.createTextNode(info.description);
            cardDescription.appendChild(cardDescriptionText);
            cardDescription.classList.add('cardDescription');
            card.appendChild(cardDescription);
            container.appendChild(card);
        });
    });
}
const weaponOption = document.querySelector('.weaponOption').addEventListener('click', ()=>{
    callWeapons();
});

/* async function callArmors() {
    const pages = await getDataArmors.getNumberPages();
    console.log(pages);
    const data = await getDataArmors.getData(pages);
    getDataArmors.showData(data);
}
callArmors(); */



/* async function callArmors() {
    const pages = await getDataTalismans.getNumberPages();
    console.log(pages);
    const data = await getDataTalismans.getData(pages);
    getDataTalismans.showData(data);
}
callArmors(); */

