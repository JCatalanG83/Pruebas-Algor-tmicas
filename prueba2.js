class Persona {
    constructor(sexo, edad) {
        this.sexo = sexo;
        this.edad = edad;
    }
}
// Generación de resultados para el grupo
let grupo = [];
let sexos = ["m", "f"];
function leer_personas(){
for (let i = 0; i < 50; i++) {
    let sexoPosicion = Math.round(Math.random());
    let edad = Math.round(Math.random() * 99);
    grupo.push(new Persona(sexos[sexoPosicion], edad));
}
console.log(grupo);
}

leer_personas();

let mayorEdad = 0;
let varonesMayores = 0;
let mujeresMenores = 0;
let totalMujeres = 0;

grupo.forEach(persona => {
    if (persona.edad >= 18) {
        mayorEdad++
    }
    if (persona.sexo == "m" && persona.edad >= 18) {
        varonesMayores++
    }
    if (persona.sexo == "f" && persona.edad < 18) {
        mujeresMenores++
    }
    if (persona.sexo == "f") {
        totalMujeres++
    }
});
document.write("La cantidad de personas mayores de edad es: " + mayorEdad + "<br>");
document.write("La cantidad de personas menores de edad es: " + (grupo.length - mayorEdad) + "<br>");
document.write("La cantidad de personas masculinas mayores de edad es: " + varonesMayores + "<br>");
document.write("La cantidad de personas femeninas menores de edad es: " + mujeresMenores + "<br>");
document.write("El porcentaje de las personas mayores de edad respecto al total es del: " + ((mayorEdad * 100) / grupo.length) + "&#37;. <br>");
document.write("El porcentaje de las mujeres respecto al total es del: " + ((totalMujeres * 100) / grupo.length) + "&#37;. <br>");

