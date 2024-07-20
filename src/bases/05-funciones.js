// funciones JS 

/*
function saludar(nombre) {
    return `Hola ${nombre}`;
}
*/

//otra forma de hacerlo, esta es la mejor practica
const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

//funciones de flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo desde saludar4`;

const getUser = () => ({uid: 'Abdfg273', username: 'Kalo_123dcfx'});

/*
function getUsuarioActivo( nombre){
    return {
        uid: 'ABC98345',
        username: nombre
    }
}
*/

const getUsuarioActivo = (nombre) => ({uid:'ABC98345', username: nombre});

console.log (saludar('Jose'));
console.log (saludar2);
console.log (saludar3);

console.log (saludar2('Juan desde saludar2'));
console.log (saludar3('Otro nombre desde saludar3'));
console.log (saludar4());
const user = getUser();
console.log(user);
const usuarioActivo = getUsuarioActivo('Jose');
console.log(usuarioActivo);