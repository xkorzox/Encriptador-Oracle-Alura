function encriptarTexto(texto) {
  texto = texto.replaceAll("e", "enter");
  texto = texto.replaceAll("i", "imes");
  texto = texto.replaceAll("a", "ai");
  texto = texto.replaceAll("o", "ober");
  texto = texto.replaceAll("u", "ufat");

  return texto;
}

function desencriptarTexto(texto) {
  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ufat", "u");

  return texto;
}

function copiarTexto() {
  var textoEncriptado = document.querySelector(".contenedor_subtitulo > h3");
  var inputTemporal = document.createElement("input");
  inputTemporal.type = "text";
  inputTemporal.value = textoEncriptado.innerText;
  document.body.appendChild(inputTemporal);
  inputTemporal.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemporal);
}

var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var botonesCopiar = document.querySelectorAll(".boton_copiar");
var botonCopiar = botonesCopiar[botonesCopiar.length - 1]; // Selecciona el último botón copiar
botonCopiar.addEventListener("click", copiarTexto);

botonEncriptar.addEventListener("click", function () {
  var textoSinEncriptar = document.querySelector(".textarea").value;
  var textoEncriptado = encriptarTexto(textoSinEncriptar);
  document.querySelector(".contenedor_subtitulo > h3").innerText =
    textoEncriptado;
});

botonDesencriptar.addEventListener("click", function () {
  var textoEncriptado = document.querySelector(".textarea").value;
  var textoDesencriptado = desencriptarTexto(textoEncriptado);
  document.querySelector(".contenedor_subtitulo > h3").innerText =
    "Texto desencriptado";
  document.querySelector(".contenedor_parrafo > p").innerText =
    textoDesencriptado;
});

var botonBorrar = document.getElementById("borrar");

botonBorrar.addEventListener("click", function () {
  document.querySelector(".textarea").value = "";
  document.querySelector(".contenedor_subtitulo > h3").innerText =
    "No se encontró ningún mensaje";
});
