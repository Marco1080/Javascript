import {data} from "./getData.js";
import {character} from "./characters.js";
import { myUtilities } from "./utilities.js";
import { episodes } from "./episodes.js";

const container = document.querySelector('.container');
let characterList;
let episodeList;;
let currentPage = 1;
async function callGetAllData() {
    let image = document.createElement('img');
    image.src = 'media/morty.gif';
    image.classList.add("loadingImage");
    const numberCharacterPages = await data.getNumberCharacterPages();
    characterList = data.getCharacterData(numberCharacterPages);
    const numberEpisodePages = await data.getNumberEpisodesPages();
    episodeList = data.getDataEpisodes(numberEpisodePages);
    myUtilities.removeClassSelected('.loadingImage', container);
    myUtilities.buildMenu();
    character.showCharacters(characterList, currentPage);
    document.querySelector('.buttonNextPage').addEventListener('click', ()=> {
        currentPage++;
        console.log(currentPage);
        myUtilities.removeClassSelected('.characterContainer', container);
        character.showCharacters(characterList, currentPage);
    });
    
}
callGetAllData();
