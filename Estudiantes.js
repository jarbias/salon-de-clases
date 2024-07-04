export default class Estudiantes {
    constructor (n,e,s){
        this.nombre = n;
        this.edad = e;
        this.sexo = s;
    }
setnombre (n){
    this._nombre = n;
}
setedad (e){
    this._edad = e;
}
setsexo (s){
    this._sexo = s;
}
 getnombre (){
    return this._nombre;
}
 getedad (){
    return this._edad;
}
 getsexo (){
    return this._sexo;
}


}


