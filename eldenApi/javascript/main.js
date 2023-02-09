import { getDataWeapons } from "./getDataWeapons.js";

async function call() {
    const pages = await getDataWeapons.getNumberPages();
    console.log(`Numero de paginas: ${pages}`)
    const dat = await getDataWeapons.getData(pages);
    getDataWeapons.showWeapons(dat, pages);
}
call();

const weaponOption = document.querySelector('.weaponOption').addEventListener('click', ()=>{});