const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45, 
    direccion: {
        ciudad: 'Medellin',
        zip: '0500002',
    } 
};

//console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'Jackie';

console.log(persona);
console.log(persona2);

console.table(persona2);
console.table(persona);