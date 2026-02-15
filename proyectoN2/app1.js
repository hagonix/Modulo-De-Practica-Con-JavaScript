const miPrimeraPromesa = new Promise((resolv,reject)=>{
      const exito = true;
       if(exito){
          resolv('datos obtenido con exito');
       }
       else{
          reject('no se ha podido obtener el resultado');
       }
})
miPrimeraPromesa
    .then((mensaje)=>console.log(mensaje))
    .catch(e=>console.error(e));


async function obtenerDatoDelUsuario(){
   
   try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if(!response.ok){
         throw new Error('Error en la solicitud de red');
      }
      const resultado = await response.json();
      console.log(response);
      console.log(resultado);

   }
   catch(e){
      console.error(e)
   }
} 
obtenerDatoDelUsuario();

//Ejemplo 2 con fetch();

async function servi(){
   try{
      let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commit');
      if(!response.ok){
         throw new Error('intente de nuevo');
      }
      let datos = await response.json();
      console.log(datos);
    }
    catch(e){console.error(`nada por aca, nulo ${e}`)}
}

//servi();

//Ejemplo 3 fetch() obtener imagen:


let user = {
  name: "John",
  surname: "Smith",

   get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

//console.log(user.fullName)

//Uso de  get y set en un objeto;


class Deportista{
      constructor(nombre, apellido){
           this.nombre = nombre;
           this.apellido = apellido;
      }
}

class Futbolista extends Deportista {
      constructor(nombre, apellido,  goles){
            this._goles = goles;
      }

       get(){
          return this._goles;
       };

       set(nuevoGol){
           this._goles = nuevoGol;
       }
}
// Modificando un Objeto;

const persona = {
   nombre : 'Marquitos',
   edad : 34,
   jobi: 'programador',

   get modificar(){
       return this.nombre
   },

   set modificar(nuevo){
      this.nombre = nuevo ;
   }
}

