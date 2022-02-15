import Animal from "./animal.js";

class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota(){
        return this._nombreMascota;
    }

    set nombreMascota(nueva_nombreMascota){
        return this._nombreMascota = nueva_nombreMascota;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(nueva_enfermedad){
        return this._enfermedad = nueva_enfermedad;
    }
};

export default Mascota;