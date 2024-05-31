// acale tenemos que pedir al backend que se encargue de actualizar la importacion de los vinos porque 
// porque las importaciones nose puede realizar en html
const urlAPI = 'http://localhost:3001'
const urlSis = 'http://localhost:3000'

class PantallaActualizacionVinos {
    /*cargarCartasBodegas() {
        fetch(`${urlSis}/cargarCartasBodegas`)
            .then(respuesta => { return respuesta.json() })
            .then(bodegas => {
                const contendorBodegas = document.getElementById('bodegas')
                contendorBodegas.innerHTML = ''
                if (bodegas.length === 0) {
                    contendorBodegas.innerHTML = '<h2>No hay bodegas con actualizaciones disponibles</h2>'
                }
                else {
                    bodegas.forEach(bodega => {
                        const bodegaElement = document.createElement('div')
                        bodegaElement.innerHTML =
                        `
                        <div class="card" style="margin-bottom: 2vh;">
                            <div class="card-body">
                            <h3 class="card-title">${bodega.nombre}</h3>
                            <h5 class="card-title">${bodega.descripcion}</h5>
                            <h5 class="card-title">${bodega.direccion}</h5>
                            <button type="button" class="btn btn-success" onclick="actualizarVinosBodega(${bodega.numero})">Actualizar vinos</button>
                            </div>
                        </div>
                        `
                        contendorBodegas.appendChild(bodegaElement)
                    })
                }
            })
    };*/

    habilitarVentana() {
        gestorActualizacionVinos.importarActualizacionVinos()
    }
    
    mostrarBodegasAActualizar(datos) {
        const contendorBodegas = document.getElementById('bodegas')
            contendorBodegas.innerHTML = ''
            if (bodegas.length === 0) {
                contendorBodegas.innerHTML = '<h2>No hay bodegas con actualizaciones disponibles</h2>'
            }
            else {
                bodegas.forEach(bodega => {
                    const bodegaElement = document.createElement('div')
                    bodegaElement.innerHTML =
                    `
                    <div class="card" style="margin-bottom: 2vh;">
                        <div class="card-body">
                        <h3 class="card-title">${bodega.nombre}</h3>
                        <h5 class="card-title">${bodega.descripcion}</h5>
                        <h5 class="card-title">${bodega.direccion}</h5>
                        <button type="button" class="btn btn-success" onclick="tomarBodegaSeleccionada(${bodega.nombre})">Actualizar vinos</button>
                        </div>
                    </div>
                    `
                    contendorBodegas.appendChild(bodegaElement)
                })
            }
    }

    tomarBodegaSeleccionada(num, nombreBodega) {
        gestorActualizacionVinos.tomarBodegaSeleccionada(nombreBodega)
        /*
        fetch(`${urlSis}/actualizarVinosBodega`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ num })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del SIS');
                }
                return response.json();
            })
            .then(vinos => {
                let tablaVinos = document.getElementById('vinos')
                tablaVinos.innerHTML = ''
                vinos.forEach(vino => {
                    let row = document.createElement('tr')
                    row.innerHTML =
                    `
                    <td>${vino.nombre}</td>
                    <td>${vino.varietales}</td>
                    <td>${vino.añada}</td>
                    <td><img style="width: 100px; heigth: 100px" src="${vino.imagen}" alt="Imagen del vino"></td>
                    <td>${vino.precioARS}</td>
                    <td>${vino.bodega}</td>    
                    <td>${vino.nota}</td>
                    <td>${vino.maridajes}</td>
                    `
                    tablaVinos.appendChild(row)
                })
            })
            .catch(error => {
                console.error('Error al llamar a al SIS: ', error);
            })*/
    };
    
    cerrarBodegas() {
        const divBodega = document.getElementById('bodegas')
        divBodega.innerHTML = ''
    }
    
    cerrarTabla() {
        const tablaVinos = document.getElementById('vinos')
        tablaVinos.innerHTML = ''
    }
}
