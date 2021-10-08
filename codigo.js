

const Sumar = () => {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var Suma = parseInt(numero1) + parseInt(numero2);
    mensaje (`${Suma}`);
}

const mensaje = (mensaje) => document.getElementById("Resultado2").value = mensaje;

//------------------------------------------------------//

const Nombre = () => {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var NombreCompleto = (nombre) + (apellido);
    MensajeNombreCompleto (`${NombreCompleto}`);
}

const MensajeNombreCompleto = (nombrecompleto) => document.getElementById("NombreConca").value = nombrecompleto;

//------------------------------------------------------//

var n1 = 0;

const calcularSuma1 = () => {
    for (i=0; i<=10; i++){
        if (i == 0) {
            n1+=1;
        }
    document.getElementById("Resultado1").value = (`${n1}`);
}}