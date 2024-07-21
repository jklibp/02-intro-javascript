
//desestructuracion 

const persona = {
    nombre: 'Jose',
    edad: 28,
    clave: 'Superclave'
};


//const { edad, clave, nombre} = persona;

//console.log(edad);
//console.log(nombre);
//console.log(clave);

const userContext = ({ clave, nombre, edad, trabaja = 'DBA'}) => {
   // console.log( nombre, edad, trabaja)

   return {
    nombreClave: clave,
    anios: edad, 
      latlng: {
        lat: 12.34,
        long: -197.099
      }
   }
}


//const persona1 = userContext(persona);
//console.log(persona1);

const {nombreClave, anios, latlng: {lat, long}} = userContext(persona);
console.log(nombreClave, anios, lat, long);

