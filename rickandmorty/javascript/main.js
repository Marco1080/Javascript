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
        callGeneralRemoves();

        characterFunction.showCharacters(characterList, currentPage, container);
        const selectOption = document.querySelector('.selectOption').addEventListener('change', ()=> {
            console.log("selected option");
        });
        const nextPage = document.querySelector('.buttonNextPage').addEventListener('click', ()=> {
            console.log(currentPage);
            currentPage++;
            myUtilities.removeClassSelected('.characterContainer', container);
            myUtilities.removeClassSelected('.selectDiv', container);
            characterFunction.showCharacters(characterList, currentPage, container);
        });
    });

    const episodeButton = document.querySelector('.buttonEpisode').addEventListener('click', ()=>{
        console.log(episodeList);
        myUtilities.removeClassSelected('.characterContainer', container);
    });


}
callGetAllData();

function callGeneralRemoves() {
    myUtilities.removeClassSelected('.characterContainer', container);
    myUtilities.removeClassSelected('.selectDiv', container);
    myUtilities.removeClassSelected('.pageDiv', container);
}