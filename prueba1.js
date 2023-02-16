let numero = Number(prompt("Introduzca un número entero"));
document.write(numero + "<br/>");

if (Number.isInteger(numero) == true) {
  if (numero % 2 == 0) {
    document.write("El número introducido es par");
    document.write("<br/>");
    while (numero >= 0) {
      document.write(numero + "<br/>");
      numero = numero - 2;
    }
  } else if (numero % 2 == 1) {
    document.write("El número introducido es impar");
    document.write("<br/>");
    while (numero >= 1) {
      document.write(numero + "<br/>");
      numero = numero - 2;
    }
  }
} else {
  document.write("El número no es entero");
}
