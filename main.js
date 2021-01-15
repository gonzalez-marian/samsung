var fechaControl = document.querySelector('input[type="date"]');
fechaControl.value = '2019-01-01';

function functionDia() {
var dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
];

var numeroDia = new Date (fechaControl.value).getDay();
var nombreDia = dias[numeroDia];
    alert("La fecha seleccionada en el elemento de fecha es un " + nombreDia);
};

var verValor = "";
function functionValor() {
    usuarioValor = document.getElementById('inputValoracion').value;
    verValor = usuarioValor;
    alert("Has valorado con " + verValor);
};

function functionCuenta() {
    usuarioPais = document.getElementById('inputPais').value;
    usuarioControl = document.getElementById('inputControl').value;
    usuarioEntidad = document.getElementById('inputEntidad').value;
    usuarioSucursal = document.getElementById('inputSucursal').value;
    usuarioDc = document.getElementById('inputDc').value;
    usuarioCuenta = document.getElementById('inputCuenta').value;
    alert("Le informamos que su cuenta bancaria es: " + usuarioPais + usuarioControl + "-" + usuarioEntidad + "-" + usuarioSucursal + "-" + usuarioDc + "-" + usuarioCuenta);
};