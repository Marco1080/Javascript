const url = 'https://services.arcgis.com/hkQNLKNeDVYBjvFE/arcgis/rest/services/Alojamientos_turisticos/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&outSR=4326&f=json';
const container = document.querySelector('.container');

function getData() {
    let listado = [];
    return fetch(url)
        .then(res=>res.json())
        .catch(error=>(console.log(error)))
    
}

async function showData() {
    console.log('Cargando datos espere...');
    const listado = await getData();
    console.log('Mostrando datos datos espere...');
    buildMenu(listado.features);
    const municipio = document.querySelector('.municipio');
    const categoria = document.querySelector('.categoria');
    const buscar = document.querySelector('.buscar').addEventListener('click', ()=> {
        let listadoFiltradoMunicipio;
        if( municipio.value == 'todos') {
            listadoFiltradoMunicipio = listado.features;
        }
        else {
            
            listadoFiltradoMunicipio = listado.features.filter(x=>x.attributes.MUNICIPIO == `${municipio.value}`);
        }
        let listadFiltradoCategoria;
        console.log(categoria.value);
        if( categoria.value == 'todos') {
            listadFiltradoCategoria = listadoFiltradoMunicipio;
        }
        else {
            console.log('UNA SOLA CATEOGIRA');
            listadFiltradoCategoria = listadoFiltradoMunicipio.filter(x=>x.attributes.Est_LLav == categoria.value);
        }
        container.innerHTML = '';
        buildMenu(listadFiltradoCategoria);
    });
}
showData();

function buildMenu(lista) {
    let table= document.createElement('table');
    let tr = document.createElement('tr');

    let th0 = document.createElement('th');
    let th0Text = document.createTextNode('NOMBRE');
    th0.appendChild(th0Text);
    tr.appendChild(th0);

    let th1 = document.createElement('th');
    let th1Text = document.createTextNode('TIPO');
    th1.appendChild(th1Text);
    tr.appendChild(th1);

    let th2 = document.createElement('th');
    let th2Text = document.createTextNode('CATEGORIA');
    th2.appendChild(th2Text);
    tr.appendChild(th2);

    let th3 = document.createElement('th');
    let th3Text = document.createTextNode('MUNICIPIO');
    th3.appendChild(th3Text);
    tr.appendChild(th3);

    table.appendChild(tr);

    lista.forEach(element => {
        let tr1 = document.createElement('tr');
        let tdNombre = document.createElement('td');
        let tdNombreText = document.createTextNode(element.attributes.NOMBRE);
        tdNombre.appendChild(tdNombreText);
        tr1.appendChild(tdNombre);
        table.appendChild(tr1);

        let tdTipo = document.createElement('td');
        let tdTipoText = document.createTextNode(element.attributes.TIPO);
        tdTipo.appendChild(tdTipoText);
        tr1.appendChild(tdTipo);
        table.appendChild(tr1);

        let tdModalidad = document.createElement('td');
        let tdModalidadText = document.createTextNode(element.attributes.Est_LLav);
        tdModalidad.appendChild(tdModalidadText);
        tr1.appendChild(tdModalidad);
        table.appendChild(tr1);

        let tdMunicipio = document.createElement('td');
        let tdMunicipioText = document.createTextNode(element.attributes.MUNICIPIO);
        tdMunicipio.appendChild(tdMunicipioText);
        tr1.addEventListener('click', ()=>{
            Swal.fire({
                title: `${element.attributes.NOMBRE}`,
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                text: `${element.attributes.TIPO}\n
                ,${element.attributes.Est_LLav}\n
                MUNICIPIO: ${element.attributes.MUNICIPIO},${element.attributes.DIRECCION}\n
                TELEFONO: ${element.attributes.TELEFONO}\n
                PLAZAS: ${element.attributes.PLAZAS}\n`,
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        });
        tr1.appendChild(tdMunicipio);
        table.appendChild(tr1);
    });

    container.appendChild(table);
}
