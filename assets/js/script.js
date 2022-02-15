import Mascota from "./mascota.js";

let listado = [];

$(() => {
    
    let listar = () => {
        $("#resultado ul").html("");
        listado.forEach((item) => {
            $("#resultado ul").append(`
                <li>${item.datosPropietario()}</li>
                <li>El tipo de animal es un: ${item.tipo} mientras que el nombre de la mascota es:  ${item.nombreMascota} y la enfermedad es: ${item.enfermedad}</li>
                <br>
            `)
        })
    }
    
    $("form").submit(evento => {
        evento.preventDefault();

        let nombre = $("#propietario").val();
        let direccion = $("#direccion").val();
        let telefono = $("#telefono").val();
        let tipo = $("#tipo").val();
        let nombreMascota = $("#nombreMascota").val();
        let enfermedad = $("#enfermedad").val();
        
        let item = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);

        listado.push(item);
        $("form")[0].reset();
        listar();
    })
});