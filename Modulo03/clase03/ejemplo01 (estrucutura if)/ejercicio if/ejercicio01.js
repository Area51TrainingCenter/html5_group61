
var dia=parseInt(prompt("Ingresa el dia de tu nacimeinto"));
var mes=parseInt(prompt("Ingresa el mes de tu nacimeinto"));
var anio=parseInt(prompt("Ingresa el año de tu nacimeinto"));

var fecha=new Date();

var anioBase=fecha.getFullYear(); 


var edad=anioBase-anio;

if(edad>18)
{
	document.write("<h1>Bievenido a Mi site</h1>");
}
else
{
	document.write("<h1>No Tienes el acceso Permitido</h1>");
}