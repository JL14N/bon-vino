class GestorActualizacionVinos {
    #bodegas
    #bodegasParaActualizar
    #bodegaElegida
    #vinosImportados
    
    constructor() {
        this.#bodegas = [];
    }

    importarActualizacionVinos() {
        this.#bodegasParaActualizar = this.#buscarBodegasParaActualizar();

        const datosBodegas = this.#bodegasParaActualizar.map(bodega => bodega.getDatos());

        pantallaActualizacionVinos.mostrarBodegasAActualizar(datosBodegas);
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

}