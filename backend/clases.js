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

    tenesEsteVino(idVino) {
        return this.#vinos.has((vino) => vino.sosEsteVino(idVino))
    };

    actualizarVino(vino) {
        this.#vinos.find(sosEsteVino(vino.id)).setNotaDeCata(vino.notaDeCata)
                                            .setPrecio(vino.precio)
                                            .setImagenEtiqueta(vino.imagenEtiqueta)
                                            .setFechaActualizacion(vino.fechaActualizacion)
        }

    crearVino(vino, maridajes, tiposUva) {
        let nuevoVino = new Vino(vino.id, vino.nombre, vino.aniada, vino.bodega, vino.imagenEtiqueta, vino.notaDeCata, vino.precio, vino.fechaActualizacion, vino.varietales, tiposUva, maridajes);
        this.#vinos.push(nuevoVino)
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

    sosEsteVino(idVino) {
        return idVino = this.#id
    }

    #crearVarietal(objVarietal, tipoUva) {
        return new Varietal(objVarietal.descripcion, objVarietal.porcentaje, tipoUva)
    }

    setNotaDeCata(valor) { this.#notaDeCata = valor; return this }

    setPrecio(valor) { this.#precio = valor; return this }

    setImagenEtiqueta(valor) { this.#imagenEtiqueta = valor; return this }

    setFechaActualizacion(valor) { this.#fechaActualizacion = valor; return this }
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