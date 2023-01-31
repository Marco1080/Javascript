//let inputIp = 'sm.mc-complex.com';
function getDataServer() {
    return fetch(`https://mcapi.us/server/status?ip=${document.querySelector('.serverIp').value}.`)
        .then(response => response.json())
        .then(data=> {return data})
        .catch(error=>console.log(error))
}
const serverIp = document.querySelector('.serverIp');
const search = document.querySelector('.search');
search.addEventListener('click', ()=> {
    if(serverIp.value != '') {
        call();
    }
    else{
        serverIp.focus();
    }
});

async function call() {
    container.innerHTML = "<img src='../media/axolote.gif'><br>Loading...";
    const serverData = await getDataServer();
    showData(serverData);
}
function showData(data) {
    container.innerHTML = '';
    let newDiv = document.createElement('div');
    newDiv.classList.add('data');
    let image = document.createElement('img');
    let currentStatus = "Offline";
    if(data.online){
        currentStatus = "Online";
    }
    let status = document.createTextNode(`Status: ${currentStatus}`);
    let players = document.createTextNode(`Current players: ${data.players.now} of ${data.players.max}`);
    let version = document.createTextNode(`Version: ${data.server.name}`);
    let textStatus =  document.createElement('p');
    let textPlayer =  document.createElement('p');
    let textVersion = document.createElement('p');
    textStatus.classList.add('dataHeader');
    textPlayer.classList.add('dataHeader');
    textVersion.classList.add('dataHeader');

    textStatus.appendChild(status);
    image.src=`${data.favicon}`;
    newDiv.appendChild(image);
    newDiv.appendChild(textStatus);
    textPlayer.appendChild(players);
    newDiv.appendChild(textPlayer);
    textVersion.appendChild(version);
    newDiv.appendChild(textVersion);
    newDiv.classList.add('newDiv');
    container.appendChild(newDiv);
}
const container = document.querySelector('.container');