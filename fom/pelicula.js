
export default class Pelicula {
    constructor({
        nombre,
        duracion,
        origen,
        director,
        protagonistas = [],
    })

    {
        this.nombre = nombre;  
        this.duracion = duracion; 
        this.origen = origen;  
        this.director = director; 
        this.protagonistas = protagonistas;
        
    }
}






//     {
//         this._nombre = nombre;  // privado (si es privado debe llevar get y set y se debe iniciar con guion bajo)
//         this.duracion = duracion; // publico
//         this._origen = origen;  //privado
//         this.director = director; // publico
//         this.protagonistas = protagonistas; // publico
        
//     }
    
//     get nombre(){
//         return this._nombre;
//     }
//     set nombre(nuevoNombre){
//         this._nombre = nuevoNombre;
//     }
//     // get duracion(){
//     //     return this.duracion;
//     // }
//     // set duracion(nuevaDuracion){
//     //     this.duracion = nuevaDuracion;
//     // }
//     get origen (){
//          return this._origen;
//      }
//      set origen(nuevoOrigen){
//          this._origen = nuevoOrigen;
//      } 
// }

