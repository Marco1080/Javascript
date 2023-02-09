export class getDataWeapons {
    static getNumberPages() {
        return fetch('https://eldenring.fanapis.com/api/weapons')
            .then(res => res.json())
            .then(data => Math.floor((data.total)/20))
            .catch(error => console.log(`Error: ${error}`))
    }

    static getData(pages){
        let weaponList = [];
            for(let index = 0; index <= pages; index++) {
                fetch(`https://eldenring.fanapis.com/api/weapons?limit=20&page=${index}`)
                .then(res => res.json())
                .then(data => weaponList.push(data.data))
                .catch(error => console.log(error))
            }
        return weaponList;
    }
    static showWeapons(list, pages) {
        //console.log(typeof(list));
        //console.log(list);
        for(index in list) {
            console.log(list[index]);
        }
    }
    /* static showData(list) {
        for(let index in list.data){
            console.log(index);
            console.log(list.data[index]);
        }
    } */
}
