import {data} from "./getData.js";
import {characterFunction} from "./characters.js";

const container = document.querySelector('.container');
let characterList;
let episodeList;

async function callGetAllData() {
    let image = document.createElement('img');
    image.src = 'media/morty.gif';
    image.classList.add("loadingImage");

    container.appendChild(image);
    const numberCharacterPages = await data.getNumberCharacterPages();
    characterList = data.getCharacterData(numberCharacterPages);
    const numberEpisodePages = await data.getNumberEpisodesPages();
    episodeList = data.getDataEpisodes(numberEpisodePages);
    removeClassSelected('.loadingImage');
    buildMenu();
}
callGetAllData();


function buildMenu() {
    let title = document.createElement('h1');
    let titleText = document.createTextNode('RICK AND MORTY');
    title.appendChild(titleText);
    
    container.appendChild(title);
}



function removeClassSelected(className) {
    let removeArray = document.querySelectorAll(`${className}`);
    if(removeArray.length > 0) {
        removeArray.forEach(element => {
            container.removeChild(element);
        });
    }
}