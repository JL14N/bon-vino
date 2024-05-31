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
        for (let i = 0; i <this.#vinos.length; i++) {
            if(this.#vinos[i].existeEsteVino(vino)) {
                this.#vinos[i].setNotaDeCata(vino.notaDeCata)
                this.#vinos[i].setPrecio(vino.precio)
                this.#vinos[i].setImagenEtiqueta(vino.imagenEtiqueta)
                this.#vinos[i].setFechaActualizacion(vino.fechaActualizacion)
                tengo = true
                break
        }}

        return tengo
    };
/*
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
*/
    crearVino(vino, maridajes, tiposUva) {
        let nuevoVino = new Vino(vino.id, vino.nombre, vino.aniada, vino.bodega, vino.imagenEtiqueta, vino.notaDeCata, vino.precio, vino.fechaActualizacion, vino.varietales, tiposUva, maridajes);
        this.#vinos.push(nuevoVino)
    }

    actualizarVino(vino) {
        this.#vinos.forEach((v, i) => {
            if (v.sosEsteVino(vino)) {
               let indice = i
            }
        })
        this.#vinos[indice].setNotaDeCata(vino.notaDeCata)
        this.#vinos[indice].setPrecio(vino.precio)
        this.#vinos[indice].setImagenEtiqueta(vino.imagenEtiqueta)
        this.#vinos[indice].setFechaActualizacion(vino.fechaActualizacion)
    }
};



export class Vino {
    // Atributos Privados
    #id
    #aniada
    #fechaActualizacion
    #imagenEtiqueta
    #nombre
    #notaDeCata
    #precio
    #bodega
    #varietales
    #maridajes
    
    // Constructor
    constructor(id, nombre, aniada, bodega, imagenEtiqueta, notaDeCata, precio, fechaActualizacion, varietales, tiposUva, maridajes) {
        this.#id = id
        this.#nombre = nombre
        this.#aniada = aniada
        this.#bodega = bodega
        this.#varietales = []
        for ( let i = 0; i < varietales.length; i++) {
            this.#varietales.push(this.#crearVarietal(varietales[i], tiposUva[i]))
        }
        this.#maridajes = maridajes
        this.#imagenEtiqueta = imagenEtiqueta
        this.#notaDeCata = notaDeCata
        this.#precio = precio
        this.#fechaActualizacion = fechaActualizacion
    }
    // Set y Gets

    set setId(valor) {
        this.#id = valor
    }
    get getId() {
        return this.#id
    }
    set setNombre(valor) {
        this.#nombre = valor
    }
    get getNombre() {
        return this.#nombre
    }
    set setAniada(valor) {
        this.#aniada = valor
    }
    get getAniada() {
        return this.#aniada 
    }
    set setBodega(valor) {
        this.#bodega = valor
    }
    get getBodega() {
        return this.#bodega 
    }
    set setImagenEtiqueta(valor) {
        this.#imagenEtiqueta = valor
    }
    get getImagenEtiqueta() {
        return this.#imagenEtiqueta
    }
    set setNotaDeCata(valor) {
        this.#notaDeCata = valor
    }
    get getNotaDeCata() {
        return this.#notaDeCata
    }
    set setPrecio(valor) {
        this.#precio = valor
    }
    get getPrecio() {
        return this.#precio
    }
    set setFechaActualizacion(valor) {
        this.#fechaActualizacion = valor
    }
    get getFechaActualizacion() {
        return this.#fechaActualizacion
    }

    // Metodos 
    sosEsteVino(vino) {
        let soy = false
        if(this.id = vino.id) {
            soy = true
        }
        return soy
    }

    #crearVarietal(objVarietal, tipoUva) {
        return new Varietal(objVarietal.descripcion, objVarietal.porcentaje, tipoUva)
    }
}

export class Varietal {
    // Atributos Privados
    #descripcion
    #porcentaje
    #tipoUva

    // Constructor
    constructor(descripcion, porcentaje, tipoUva) {
        this.#descripcion = descripcion
        this.#porcentaje = porcentaje
        this.#tipoUva = tipoUva
    }
}