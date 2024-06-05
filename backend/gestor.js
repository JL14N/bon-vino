class GestorActualizacionVinos {
    #bodegas
    #bodegasParaActualizar
    #bodegaElegida
    #vinosAPI
    #maridajes
    #tiposUva
    
    constructor() {
        this.#bodegas = [];
        // Hay que definir la creacion de los array de maridajes y tiposUva con sus objetos
    }

    async importarActualizacionVinos() {
        this.#buscarBodegasParaActualizar();

        const datosBodegas = this.#bodegasParaActualizar.map(bodega => bodega.getDatos());

        pantallaActualizacionVinos.mostrarBodegasAActualizar(datosBodegas);
        
        pantallaActualizacionVinos.solicitarBodegas()
        this.#obtenerActualizacionVinosBodega()

        this.#actualizarOCrearVinos()
    }

    #actualizarOCrearVinos() {
        this.#vinosAPI.foreach((vinoAPI) => {
            if (this.#verificarVinoExistente(vinoAPI.id)) {
                this.#actualizarVinoExistente(vinoAPI)
            } else {
                maridaje = this.#buscarMaridaje()
            }
        })
    }

    #verificarVinoExistente(idVinoAPI) {
        return this.#bodegaElegida.tenesEsteVino(idVinoAPI)
    }

    #actualizarVinoExistente() {
        this.#bodegaElegida.actualizarVino(vinoAPI)
    }
    
    #buscarBodegasParaActualizar() {
        const now = (new Date()).getTime();
        this.#bodegasParaActualizar = this.#bodegas.filter(bodega => bodega.tenesActualizacionDisponible(now));
    }

    tomarBodegaSeleccionada(numBodega) {
        this.#bodegaElegida = this.#bodegasParaActualizar.find(bodega => bodega.numero = numBodega);
    }

    async #obtenerActualizacionVinosBodega() {
        const response = await fetch(`http://localhost:3001/bodegas/${this.#bodegaElegida.numero}`)
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		this.#vinosAPI = await response.json();
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