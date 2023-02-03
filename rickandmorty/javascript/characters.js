export class characterFunction{
    static showCharacters(list, currentPage, container) {
        let characterContainer = document.createElement('div');
        characterContainer.classList.add('characterContainer');

        let select = document.createElement('select');
        select.classList.add('selectOption');

        let optionShowOrderedById = document.createElement('option');
        optionShowOrderedById.value = 'orderedById';

        let optionShowAliveCharacter = document.createElement('option');
        optionShowAliveCharacter.value = 'alive';

        let optionShowNotAliveCharacter = document.createElement('option');
        optionShowNotAliveCharacter.value = 'notAlive';
        
        let optionShowOrderedByIdText = document.createTextNode('ORDERED BY ID');
        let optionShowAliveCharacterText = document.createTextNode('ALIVE');
        let optionShowNotAliveCharacterText = document.createTextNode('NOT ALIVE');

        optionShowOrderedById.appendChild(optionShowOrderedByIdText);
        optionShowAliveCharacter.appendChild(optionShowAliveCharacterText);
        optionShowNotAliveCharacter.appendChild(optionShowNotAliveCharacterText);

        select.appendChild(optionShowOrderedById);
        select.appendChild(optionShowAliveCharacter);
        select.appendChild(optionShowNotAliveCharacter);

        let selectDiv = document.createElement('div');
        selectDiv.classList.add('selectDiv');
        selectDiv.appendChild(select);

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

        container.appendChild(selectDiv);
        container.appendChild(characterContainer);
        container.appendChild(pageDiv);
    }
}
