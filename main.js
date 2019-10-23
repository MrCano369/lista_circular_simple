var ruta20 = new Ruta();

ruta20.agregar(new Base("UdeC", 30));
ruta20.agregar(new Base("Hospital", 15));
ruta20.agregar(new Base("zentralia", 20));
ruta20.agregar(new Base("el IMSS", 40));
ruta20.agregar(new Base("La villa centro", 25));

ruta20.imprimir();

btnRecorrido.addEventListener("click", () => {
	ruta20.crearRecorrido(base.value, horaI.value, horaF.value);
});