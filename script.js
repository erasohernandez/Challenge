const textoEntrada = document.querySelector(".texto-entrada");
const informacion = document.querySelector(".informacion");
const textoSalida = document.querySelector(".texto-salida");
const botonCopiar = document.querySelector(".boton-copiar");

botonCopiar.style.display = 'none';

function encriptar(texto) {
    texto = quitarAcentos(texto);
    texto = texto.toLowerCase();
    let keys = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    
    for(let i = 0; i < keys.length; i++) {
        if(texto.includes(keys[i][0])) {
            texto = texto.replaceAll(keys[i][0], keys[i][1]);
        }
    }
    return texto;
}

function botonEncriptar() {
    const texto = encriptar(textoEntrada.value);
    textoSalida.value = texto;
    textoEntrada.value = "";
    textoSalida.style.backgroundImage = 'none';
    botonCopiar.style.display = 'block';
}

function desencriptar(texto) {
    let keys = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    texto = texto.toLowerCase();
    texto = quitarAcentos(texto);

    for(let i = 0; i < keys.length; i++) {
        if(texto.includes(keys[i][1])) {
            texto = texto.replaceAll(keys[i][1], keys[i][0]);
        }
    }
    return texto;
}

function botonDesencriptar() {
    const texto = desencriptar(textoEntrada.value);
    textoSalida.value = texto;
    textoEntrada.value = "";    
}

function copiar() {    
    textoSalida.select();
    textoSalida.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoSalida.value);
}

function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}