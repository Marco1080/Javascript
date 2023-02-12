export class getDataTalismans {
    static getNumberPages() {
        return fetch('https://eldenring.fanapis.com/api/talismans')
            .then(res => res.json())
            .then(data => Math.floor((data.total)/20))
            .catch(error => console.log(`Error: ${error}`))
    }

    static async getData(pages){
        let weaponList = [];
            for(let index = 0; index <= pages; index++) {
                await fetch(`https://eldenring.fanapis.com/api/talismans?limit=20&page=${index}`)
                    .then(res => res.json())
                    .then(data => weaponList.push(data.data))
                    .catch(error => console.log(error))
            }
        return weaponList;
    }
    static showData(list, pages) {
        console.log(typeof(list));
        list.forEach(element => {
            element.forEach(weapon => {
                console.log(weapon.name)
            });
        });
    }
}