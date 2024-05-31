class GestorActualizacionVinos {
    #bodegas
    #bodegasParaActualizar
    #bodegaElegida
    #vinosImportados
    #maridajes
    #tiposUva
    
    constructor() {
        this.#bodegas = [];
        // Hay que definir la creacion de los array de maridajes y tiposUva con sus objetos
    }

    importarActualizacionVinos() {
        this.#bodegasParaActualizar = this.#buscarBodegasParaActualizar();

        const datosBodegas = this.#bodegasParaActualizar.map(bodega => bodega.getDatos());

        pantallaActualizacionVinos.mostrarBodegasAActualizar(datosBodegas);
        this.#obtenerActualizacionVinosBodega()
        this.#actualizarOCrearVinos();
        
        // Actualiza el Array de Bodegas con la bodegaElegida cuando está Actualizada
        for (let i = 0; i < this.#bodegas; i++) {
            if(this.#bodegas[i].getNumero() == this.#bodegaElegida.getNumero()){
                this.#bodegas[i] = this.#bodegaElegida
            }
        }
        
         pantallaActualizacionVinos.mostrarResumenVinos(this.#bodegaElegida.getVinos())

    }

    #buscarBodegasParaActualizar() {
        const now = (new Date()).getTime();
        return this.#bodegas.filter(bodega => bodega.tenesActualizacionDisponible(now));
    }

    tomarBodegaSeleccionada(numBodega) {
        this.#bodegaElegida = this.#bodegasParaActualizar.find(bodega => bodega.numero = numBodega);
        this.#obtenerActualizacionVinosBodega()
    }

    async #obtenerActualizacionVinosBodega() {
        const response = await fetch(`http://localhost:3001/bodegas/${this.#bodegaElegida.numero}`)
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		this.#vinosImportados = await response.json();
    }

    #actualizarOCrearVinos() {
        this.#vinosImportados(vI => {
           let tiene = this.#bodegaElegida.tenesEsteVino(vI)
           if (tiene != true) {
            let maridajes = this.#buscarMaridaje(vI.maridajes)
            let tiposUva = this.#buscarTipoUva(vI.varietales)
            this.#crearVino(vinoImportado, maridajes, tiposUva)
           }
           this.#bodegaElegida.setFechaUltimaActualizacion(new Date())
        })
    }
    #actualizarVinoExistente(vino) {
        this.#bodegaElegida.actualizarVino(vino)
    }
    #crearVino(vinoImportado, maridajes, tiposUva) {
        this.#bodegaElegida.crearVino(vinoImportado, maridajes, tiposUva)
    }
    #buscarMaridaje(objMaridajes) {

        // Hay que hacer este metodo con el metodo sosMaridaje de la clase Maridaje
        let maridajes = []
        

        return maridajes

    }
    #buscarTipoUva(objVarietales) {
        // Hay que hacer este metodo con el metodo sosTipoUva de la clase TipoUva
        let tiposUva = []
        

        return tiposUva
    }
}