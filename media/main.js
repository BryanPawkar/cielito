const flecha = document.getElementById("flechita"); 

const comienza = document.getElementById("comenzar");  
const saludo = document.getElementById("saludo"); 
let texto = []; 
texto[0] = document.getElementById("uno");
texto[1] = document.getElementById("dos");
texto[2] = document.getElementById("tres");
texto[3] = document.getElementById("cuatro");
texto[4] = document.getElementById("cinco");
texto[5] = document.getElementById("seis");
texto[6] = document.getElementById("siete");
texto[7] = document.getElementById("ocho");
texto[8] = document.getElementById("nueve");
texto[9] = document.getElementById("diez");
texto[10] = document.getElementById("once");
texto[11] = document.getElementById("doce");
texto[12] = document.getElementById("trece");
let corazones = document.getElementsByName("corazones"); 

var corazon = [];
corazon[0] = "verde.png";  
corazon[1] = "amarillo.png"
corazon[2] = "celeste.png"
corazon[3] = "naranja.png"
corazon[4] = "rosa.png"
corazon[5] = "morado.png"
corazon[6] = "rojo.png"
corazon[7] = "verde.png"
corazon[8] = "rosa.png"
corazon[9] = "azul.png"
corazon[10] = "rojo.png"
corazon[11] = "verde.png"
corazon[12] = "celeste.png"
corazon[13] = "azul.png"

let contador = 0; 

flecha.addEventListener("click", function(){
    comienza.style.display = "none"; 
    saludo.style.display = "none"; 
    if(contador === 0){
        if(texto[contador].style.display === "none"){
            texto[contador].style.display = "block"
            document.corazones.src = corazon[contador]; 
        }else{
            texto[contador].style.display ="none";  
        }
    }else if(contador <12){
        if(texto[contador].style.display === 'none'){
            texto[contador-1].style.display ="none"; 
            texto[contador].style.display = "block"
            document.corazones.src = corazon[contador]; 
        }else{
            texto[contador].style.display ="none"; 
        }
    }else{
        flecha.style.display = "none"; 
        if(texto[contador].style.display === "none"){
            texto[contador-1].style.display = "none"; 
            texto[contador].style.display = "block"; 
            document.corazones.src = corazon[contador]; 
            contador++; 
        }else{
            texto[contador].style.display ="none"; 
        }
    }
    return contador++; 
})
