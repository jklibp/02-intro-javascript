
//desestructuración de arrays

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;
console.log(p3);


const [,p2] = personajes;
console.log(p2);

const [p1] = personajes;
console.log(p1);


const useState = ( valor) => {
    return [ valor, () => { console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Jose');
console.log( nombre);
setNombre();