export class character{
    static showCharacters(list, currentPage) {
        let container = document.querySelector('.container');

        let characterContainer = document.createElement('div');
        characterContainer.classList.add('characterContainer');


        list[currentPage].results.forEach(element => {

            let image = document.createElement('img');
            image.classList.add('characterProfile');
            image.src= element.image;

            let cardCharacter = document.createElement('div');
            cardCharacter.classList.add('cardCharacter');
            cardCharacter.appendChild(image);

            let characterName = document.createElement('p');
            let characterNameText = document.createTextNode(element.name);
            characterName.appendChild(characterNameText);
            cardCharacter.appendChild(characterName);

            let characterStatus = document.createElement('p');
            let characterStatusText = document.createTextNode(`Status: ${element.status}`);
            characterStatus.appendChild(characterStatusText);
            cardCharacter.appendChild(characterStatus);

            characterContainer.appendChild(cardCharacter);
            
        });
        let pageDiv = document.createElement('div');
        pageDiv.classList.add('pageDiv');
        let buttonNextPage = document.createElement('button');
        let buttonNextPageText = document.createTextNode('NEXT');
        buttonNextPage.classList.add('buttonNextPage');

        let buttonPreviousPage = document.createElement('button');
        buttonPreviousPage.classList.add('buttonPreviousPage');
        let buttonPreviousPageText = document.createTextNode('PREVIOUS');
        buttonPreviousPage.appendChild(buttonPreviousPageText);
        pageDiv.appendChild(buttonPreviousPage);

        buttonNextPage.appendChild(buttonNextPageText);
        pageDiv.appendChild(buttonNextPage);
        container.appendChild(characterContainer);
        container.appendChild(pageDiv);
    }
    static showAliveCharacter(list) {
        list.forEach(element => {
            element.results.forEach(character => {
                if(character.status == 'Alive'){
                    console.log(character.status, character.name);
                }
            });
        });
    }
    static showDeadCharacter(list) {
        list.forEach(element => {
            element.results.forEach(character => {
                if(character.status == 'Dead'){
                    console.log(character.status, character.name);
                }
            });
        });
    }
    static showUnkownCharacter(list) {
        list.forEach(element => {
            element.results.forEach(character => {
                if(character.status == 'unknown'){
                    console.log(character.name);
                }
            });
        });
    }
}
