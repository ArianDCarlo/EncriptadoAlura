function codificar() {

    const disguise = ocultar();
    const buttonCopy = btnCopy();   
    const encrip = document.getElementById("textAEncrip").value;
        
    let e = encrip;
    e = e.replace(/e/g, "enter");
    let i = e;
    i = i.replace(/i/g, "imes");
    let a = i;
    a = a.replace(/a/g, "ai");
    let o = a;
    o = o.replace(/o/g, "ober");
    let u = o;
    u = u.replace(/u/g, "ufat");

    return u;
    
}

function decodificar() {

    const disguise = ocultar();
    const buttonCopy = btnCopy()    
    const encrip = document.getElementById("textAEncrip").value;

    let enter = encrip;
    enter = enter.replace(/enter/g, "e");
    let imes = enter;
    imes = imes.replace(/imes/g, "i");
    let ai = imes;
    ai = ai.replace(/ai/g, "a");
    let ober = ai;
    ober = ober.replace(/ober/g, "o");
    let ufat = ober;
    ufat = ufat.replace(/ufat/g, "u");

    return ufat;

}

function ocultar(){

    const munheco = document.getElementById("munheco1").style.display = "none";    
    const nullMsje = document.getElementById("nullMsje").style.display = "none";
    const ingresoMsje = document.getElementById("ingresoMsje").style.display = "none";
}

function btnCopy(){
    
    const show = document.getElementById("copiar").style.display = "show";
    const inherit = document.getElementById("copiar").style.display = "inherit";

}


const textArea = document.querySelector(".text1");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar() {

    const textoEncriptado = codificar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
       
}

function btnDesencriptar() {

    const textoDesncriptado = decodificar(textArea.value);
    mensaje.value = textoDesncriptado
    textArea.value = "";
    
}

function btnCopiar() {
   
    const contenido = document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("copy");

}