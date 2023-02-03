export class characterFunction{
    static showCharacters(list, currentPage, container) {
        console.log(list[currentPage].results);
        let characterContainer = document.createElement('div');
        characterContainer.classList.add('characterContainer');
        list[currentPage].results.forEach(element => {

            let image = document.createElement('img');
            image.classList.add('characterProfile');
            image.src= element.image;

            let cardCharacter = document.createElement('div');
            cardCharacter.classList.add('cardCharacter');
            cardCharacter.appendChild(image);

            characterContainer.appendChild(cardCharacter);
        });
        container.appendChild(characterContainer);
    }
}