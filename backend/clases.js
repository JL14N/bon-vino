export class Bodega {
    #numero
    #nombre
    #descripcion
    #direccion
    #periodicidad
    #fechaActualizacion
    #vinos    
    
    constructor(nombre, descripcion, direccion, periodicidad, fechaActualizacion, vinos) {
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#direccion = direccion
        this.#periodicidad = periodicidad;
        this.#fechaActualizacion = fechaActualizacion;
        this.#vinos = vinos;
    }

    tenesActualizacionDisponible(now) {
        timeDiffInMonths = (now - this.#fechaActualizacion.getTime()) / (1000 * 60 * 60 * 24 * 30.42);
        return timeDiff >= this.#periodicidad;
    }

    getDatos() {
        return { nombre: this.#nombre, descripcion: this.#descripcion, direccion: this.#direccion };
    }

    tenesEsteVino(vino) {
        let tengo = false
        for (let i = 0; i < this.vinos.length; i++) {
            let vinoBodega = this.vinos[i]
            if (vinoBodega.id == vino.id) {
                tengo = true;
                break
            }
        }
        return tengo
    };

    actualizarDatosVino(vinoActualizado) {
        for (let i = 0; i < this.vinos.length; i++) {
            let vino = this.vinos[i]
            if (vino.id == vinoActualizado.id) {
                vino.imagen = vinoActualizado.imagen
                vino.precioARS = vinoActualizado.precio
                vino.nota = vinoActualizado.nota
                vino.maridajes = vinoActualizado.maridaje
                break
            }
        }
    };

    crearVino(vino) {
        let nuevoVino = new Vino(vino.id, vino.nombre, vino.varietal, vino.añada, vino.imagen, vino.precio, vino.bodega, vino.nota, vino.maridaje);
        console.log(nuevoVino)
        this.vinos.push(nuevoVino)
    }

};



export class Vino {
    #aniada
    #fechaActualizacion
    #imagenEtiqueta
    #nombre
    #notaDeCata
    #precio
    #bodega
    
    constructor() {

    }
}