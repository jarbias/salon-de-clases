// Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante 
// (nombre,
   // edad y sexo).
   // El dato sexo es una letra F o M (femenino - masculino). 
    //Se desean procesar estos registros de estudiantes para determinar:
    // a. la edad promedio,
    // b. el nombre del estudiante con mayor edad,
    // c. el porcentaje de chicas que son mayor de edad. 
   // El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18)//*


import Estudiantes from "./Estudiantes.js";
import Salon from "./Salon.js";
// instanciar objeto estudiante
let estudiante1 = new Estudiantes("Luis", 16, "m");
let estudiante2 = new Estudiantes ("Ana", 19, "f");
let estudiante3 = new Estudiantes ("Jose", 20, "m");
let estudiante4 = new Estudiantes ("Carmen", 18, "f"); 
 
let todosalon = new Salon();
todosalon.procesarestudiantes(estudiante1);
todosalon.procesarestudiantes(estudiante2);
todosalon.procesarestudiantes(estudiante3);
todosalon.procesarestudiantes(estudiante4);
 // salida de datos 
 let salida=document.getElementById("resultados");
 salida.innerHTML+=  "resultados: <br>" ;
  salida.innerHTML+=  "La edad promedio es: "+todosalon.edadpromedio() + "<br>" ;
  salida.innerHTML+=  "El nombre del estudiante con mayor edad es: "+todosalon.devolvermayor() +"<br>" ;
  salida.innerHTML+=  "El porcentaje de chicas que son mayor de edad es: "+todosalon.porcentajechicasmayores() +"% " ;
 
