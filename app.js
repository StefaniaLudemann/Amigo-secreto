// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];
let sorteoRealizado = false; 


function agregarAmigo()
{
 let cajaNombres = document.getElementById('amigo').value;
 if (cajaNombres == ''){
    alert('por favor, introduzca un nombre');
    return;
 }else{
   if (nombreAmigos.length < 5){

      nombreAmigos.push(cajaNombres); //agrego los nombres al array
      console.log(nombreAmigos);
      //mostrar array de nombres
      let listaAmigos = document.getElementById('listaAmigos');
      listaAmigos.innerHTML = nombreAmigos;
      limpiarTextbox();
   }   
   if (nombreAmigos.length === 5) {
      document.getElementById('amigo').disabled = true; // Deshabilito botón de agregar
      
 } 
}
}

function sortearAmigo(){
   if(nombreAmigos.length === 0){
      alert('No hay nombres para sortear');
      return;
   }

   const indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);
   const nombreSorteado = nombreAmigos[indiceAleatorio];

   //mostrar nombre 
   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `El nombre del amigo secreto es: ${nombreSorteado}`;

   


}

function limpiarTextbox(){
   document.getElementById('amigo').value = '';
}

agregarAmigo();
sortearAmigo();






