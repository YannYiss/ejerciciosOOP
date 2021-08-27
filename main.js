class Alumnos {
    constructor ({nombre,apellido,califFinal,inscrito}) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._califFinal = califFinal;
        this._inscrito = inscrito;
        this._calificaciones = [];
    }
    obtenerInicialesDeAlumno(){
        return this._nombre[0] + this._apellido[0];
    }
    obtenerNombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    aprobado (){
        if (this._califFinal >= 6.0){
            return "Felicidades, aprobaste";
        }
        else {
            return "Reprobaste";
        }
    }
    agregarCalificacion(materia, promedio) {
        this._calificaciones.push({
          materia, promedio
        });
        
        return 'Calificacion agregada';
      }
      
      obtenerPromedio() {
        let calificacionFinal = 0;
        
        this._calificaciones.forEach(item => {
          calificacionFinal += item.promedio
        })
        
        return `El promedio total es ${Math.round(calificacionFinal / this._calificaciones.length)}`;
      }
      obtenerCalificaciones() {
        this._calificaciones.forEach(item => {
          console.log(`${item.materia}: ${item.promedio}`)
        })
      }
    
}

const persona1a = new Alumnos({nombre: "Juan", apellido:"Perez", califFinal: 6.0, inscrito: true});
const persona2a = new Alumnos({nombre: "Pedro", apellido:"Lopez", califFinal: 5.9, inscrito: true});

console.log(persona1a.obtenerInicialesDeAlumno());
console.log(persona2a.obtenerInicialesDeAlumno());

console.log(persona1a.obtenerNombreCompleto());
console.log(persona2a.obtenerNombreCompleto());

console.log(persona1a.aprobado());
console.log(persona2a.aprobado());

console.log(persona1a.agregarCalificacion('matematicas', 8));
console.log(persona1a.agregarCalificacion('historia', 7));
console.log(persona1a.agregarCalificacion('letras', 2));
console.log(persona1a.obtenerPromedio());
console.log(persona1a.obtenerCalificaciones());
