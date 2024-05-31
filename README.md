# bon-vino

# Ultima Modificación de Franco | 31-05-24 19 hs aprox
- Terminé el Metodo Actualizar o Crear Vinos, instanciando la mayoría de sus metodos
- Falta crear la Clase tipoUva
- Faltan instanciar todos los metodos get y set de las clases
- Quedaron vacíos los metodos buscarMaridaje() y buscarTipoUva()
- Falta crear los metodos sosMaridaje() y sosTipoUva() en sus respectivas clases
- Falta crear la funcion mostrarResumenVinos() de la clase pantallaActualizacionVinos
-Agrego carpeta datos al backend
    - sistema: objetos que pertenecen al sistema, bodegas.json, maridajes.json, tiposUvas.json
        - vinos: carpeta con los vinos de cada bodega, estos son los vinos que ya se encuentran en el sistema, por eso se encuentran en la carpeta sistema
    -API: carpeta con los datos que serían de la API, contiene un archivo APIbodega{num}.json, por cada bodega, ya que cada una en teoría tendría su propia API

Recordatorio: En algún momento vamos a tener que instanciar los metodos que guarden los arrays de objetos actualizados en el sistema, siendo estos los vinos porque agregamos vinos nuevos y actualizamos atributos de otros, y las bodegas porque cambiamos su atributo fechaActualizacion