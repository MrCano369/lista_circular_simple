class Base{
	constructor(n, m){
		this._nombre = n;
		this._minutos = m;
		this._sig = null;
	}
	get nombre(){return this._nombre;}
	get minutos(){return this._minutos;}
	get sig(){return this._sig;}
	set sig(v){this._sig = v;}
}