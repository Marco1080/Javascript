export class myUtilities {
    static buildMenu(container) {
        let menu = document.createElement('div');
        menu.classList.add('menu');
        let title = document.createElement('h1');
        let titleText = document.createTextNode('RICK AND MORTY');
        title.appendChild(titleText);
    
        let image = document.createElement('img');
        image.src = 'media/rickandmorty.png';
        image.classList.add("menuImage");
        
        let menuButtons = document.createElement('div');
        menuButtons.classList.add('menuButtons');
        let buttonCharacter = document.createElement('button');
        let buttonCharacterText = document.createTextNode('CHARACTERS');
        buttonCharacter.appendChild(buttonCharacterText);
    
        let buttonEpisode = document.createElement('button');
        let buttonEpisodeText = document.createTextNode('EPISODES');
        buttonEpisode.appendChild(buttonEpisodeText);
    
        menu.appendChild(title);
        menu.appendChild(image);
        menuButtons.appendChild(buttonCharacter);
        menuButtons.appendChild(buttonEpisode);
        menu.appendChild(menuButtons);
    
        container.appendChild(menu);
    }

    static removeClassSelected(className, container) {
        let removeArray = document.querySelectorAll(`${className}`);
        if(removeArray.length > 0) {
            removeArray.forEach(element => {
                container.removeChild(element);
            });
        }
    }
}