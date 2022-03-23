/************ REMAKE 3 *************/
//const contenedor = document.querySelector('.flex-container');
//const btn = document.getElementById('btn');
let form = document.getElementById('formulario');
form.addEventListener('submit', e => {
    e.preventDefault();
});
class Alumnos{
    constructor(apellido,nombre,asistencias, info){
        this.apellido=apellido,
        this.nombre=nombre,
        this.asistencias=asistencias,
        this.info = `ALUMNO: ${this.apellido}, ${this.nombre}<br>ASISTENCIAS: ${this.asistencias}<br>`
    };
    regularidad() {
        let result = '';
        this.asistencias < 18 ? result = `<span id='repr'><b>REPROBADO POR INASISTENCIAS</b></span>` : result = `<span id='apr'><b>ASISTENCIAS REGULARIZADAS</b></span>`;
        return result;
    };
    obtenerInfo() {
        return this.info;
    };
};
let cargaAlumn = document.getElementById('cargaAlumn');
cargaAlumn.addEventListener('click', ()=>{
    let cantAlumn = prompt('Cuantos alumnos son?')
    imprAlumn(cargarAlumn(cantAlumn));
});

const cargarAlumn = (cant) => {
    let alumnosTotales = [];
    for (i = 0; i < cant; i++) {
        alumnIng = new Alumnos(prompt('Apellido del alumno '+(i+1)), prompt('Nombre del alumno '+(i+1)), prompt('Asistencias '+(i+1)));
        alumnosTotales[i] = alumnIng;
    };
    return alumnosTotales;
};
const imprAlumn = (alTot) => {
    for (alumn in alTot) {
        document.body.innerHTML+=(`<div class='miniContainer'>${alTot[alumn].obtenerInfo()}${alTot[alumn].regularidad()}</div>`);
    };
};












/************ REMAKE 2 *************/

/* let cantAlumn = prompt('Cuántos alumnos son?');
let alumnosTotales = [];
class Alumnos{
    constructor(apellido,nombre,asistencias, info){
        this.apellido=apellido,
        this.nombre=nombre,
        this.asistencias=asistencias,
        this.info = `ALUMNO: ${this.apellido}, ${this.nombre}<br>ASISTENCIAS: ${this.asistencias}<br>`
    }
    regularidad() {
        let result = '';
        if (this.asistencias < 18 ? result = `<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>` : result = `<b style='color:green'>ASISTENCIAS REGULARIZADAS</b><br><br>`);
        return result;
    }
    obtenerInfo() {
        return this.info;
    }
}
for (i = 0; i < cantAlumn; i++) {
    alumnIng = new Alumnos(prompt('Apellido del alumno'), prompt('Nombre del alumno'), prompt('Asistencias'));
    alumnosTotales[i] = alumnIng;
}
for (alumno in alumnosTotales) {
    document.write(`${alumnosTotales[alumno].obtenerInfo()}${alumnosTotales[alumno].regularidad()}`);
} */