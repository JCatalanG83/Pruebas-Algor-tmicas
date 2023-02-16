let horasTrabajadas = parseInt(prompt("Introduzca el número de horas trabajadas esta semana"));
let tarifa = parseInt(prompt("Introduzca la tarifa aplicable"));

if (horasTrabajadas>40) {
    console.log("Se han trabajado más de 40 horas")
    let horasExtra =(horasTrabajadas-40);
    let sueldoExtra = (40*tarifa + (horasExtra*(tarifa*1,5)));
    document.write("Te corresponde un salario de: " + sueldoExtra);
} else {
    let sueldo = horasTrabajadas*tarifa;
    document.write("Tu salario es: " + sueldo)
}