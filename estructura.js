class Ruta{
	constructor(){
		this._primero = null;
	}
	get primero(){return this._primero;}
	set primero(v){this._primero = v;}

	agregar(base){
		if (this._primero) {
			var actual = this._primero;
			while(actual.sig != this._primero){
				actual = actual.sig;
			}
			actual.sig = base;
		}else{
			this._primero = base;
		}
		base.sig = this._primero;
	}

	buscar(nombre){
		var actual = this._primero;
		do{
			if (actual.nombre == nombre)
				return actual;
			else
				actual = actual.sig;
		}while(actual != this._primero);
		return null;
	}

	buscarAnterior(nombre){
		var actual = this._primero;
		do{
			if (actual.sig.nombre == nombre)
				return actual;
			else
				actual = actual.sig;
		}while(actual != this._primero);
		return null;
	}

	eliminar(nombre){
		var base = this.buscarAnterior(nombre);
		if (base) {
			if (base.sig == this._primero) {
				if (base == this._primero) {
					this._primero = null;
				}else{
					this._primero = base.sig.sig;
					base.sig = this._primero;
				}
			}else{
				base.sig = base.sig.sig;
			}
			this.imprimir();
			return true;
		}else
			return null;
	}

	imprimir(){
		if (this._primero) {
			var actual = this._primero;
			do{
				console.log(actual.nombre, actual.minutos);
				actual = actual.sig;
			}while(actual != this.primero);
		console.log("////////////////////");
		}else
			return null;	
	}

	insertar(base){
		//null
	}

	stringHora(m){
		var h = Math.trunc(m / 60);
		var m = m % 60;
		if (m < 10) {
			m = "0"+m;
		}
		return h + ":" + m;
	}

	//formato horas: '23:59'
	crearRecorrido(nombreBaseInicio, horaInicio, horaFin){
		var hI = Number(horaInicio.split(":")[0])*60+Number(horaInicio.split(":")[1]);
		var hF = Number(horaFin.split(":")[0])*60+Number(horaFin.split(":")[1]);
		var tiempo = hF - hI;
		var actual = this.buscar(nombreBaseInicio);
		while(hI <= hF){
			console.log(actual.nombre, this.stringHora(hI));
			hI += actual.sig.minutos;
			actual = actual.sig;
		}
	}
}