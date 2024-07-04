
export default class Salon {
    constructor() {
        this.acumedad = 0;
        this.contestudiantes = 0;
        this.chicasmayores=0;
      this.auxnombre;
      this.mayor=0; 
      this.contaf = 0;
    }
// metodos 
 procesarestudiantes (es){
    this.contestudiantes += 1;
    this.acumedad += es.edad;
    if (es.edad > 18 , es.sexo == 'f') {
        this.chicasmayores += 1;
    }
    if (es.sexo == 'f') {
        this.contaf += 1;
    }
    if (es.edad>this.mayor) { 

        this.mayor = es.edad;
        this.auxnombre = es.nombre;
    }
}

//metodos 
edadpromedio (){
    return this.acumedad / this.contestudiantes;
}
  porcentajechicasmayores() {
    return (this.chicasmayores / this.contaf) * 100;
  }
  devolvermayor() {
    return this.auxnombre;
  }

}

