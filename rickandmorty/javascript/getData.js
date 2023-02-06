export class data {
    //start get data from characters
    static getNumberCharacterPages() {
        return fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json()
            )
            .then((json) => {return json.info.pages})
            
            .catch((err) => reject(err));
    }
    static getCharacterData(pages) {
        let characterDataList = [];
        for (let index = 0; index <= pages; index++) {
            fetch(`https://rickandmortyapi.com/api/character?page=${index}`)
                .then(response=>response.json())
                .then(data=>{
                    characterDataList.push(data);
                })
                .catch(error=> {
                    console.log(`${error} No se ha podido obtener los datos solicitados.`)
                })
            }
        return characterDataList;
    }
   //end

   //start get data from episodes
    static getNumberEpisodesPages() {
        return fetch('https://rickandmortyapi.com/api/episode')
            .then((response) => response.json()
            )
            .then((json) => {return (json.info.pages)}
            )
            .catch((err) => reject(err));
    }
    static getDataEpisodes(numberPages) {
        let episodeList = [];
        for (let index = 1; index <= numberPages; index++) {
            fetch(`https://rickandmortyapi.com/api/episode?page=${index}`)
            .then((response) => response.json()
            )
            .then(data=>{
                episodeList.push(data);
            })
            .catch((err) => reject(err));
        }
        return episodeList;
    }
    //end
}