import {data} from "./getData.js";
import {characterFunction} from "./characters.js";
import { myUtilities } from "./utilities.js";

const container = document.querySelector('.container');
let characterList;
let episodeList;
let currentPage = 1;
async function callGetAllData() {
    let image = document.createElement('img');
    image.src = 'media/morty.gif';
    image.classList.add("loadingImage");

    container.appendChild(image);
    const numberCharacterPages = await data.getNumberCharacterPages();
    characterList = data.getCharacterData(numberCharacterPages);
    const numberEpisodePages = await data.getNumberEpisodesPages();
    episodeList = data.getDataEpisodes(numberEpisodePages);
    myUtilities.removeClassSelected('.loadingImage', container);
    myUtilities.buildMenu(container);

    const characterButton = document.querySelector('.buttonCharacter').addEventListener('click', ()=> {
        myUtilities.removeClassSelected('.characterContainer', container);
        characterFunction.showCharacters(characterList, currentPage, container);
    });

    const episodeButton = document.querySelector('.buttonEpisode').addEventListener('click', ()=>{
        console.log(episodeList);
        myUtilities.removeClassSelected('.characterContainer', container);
    });
}
callGetAllData();