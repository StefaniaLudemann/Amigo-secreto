// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];


function agregarAmigo()
{
 let cajaNombres = document.getElementById('amigo').value;
 if (cajaNombres == ''){
    alert('Por favor, introduzca un nombre');
    return;
 }else{
   if (nombreAmigos.length < 5){

      nombreAmigos.push(cajaNombres); //agrego los nombres al array
      let listaAmigos = document.getElementById('listaAmigos'); //mostrar array de nombres
      listaAmigos.innerHTML = nombreAmigos.join('<br>');;
      limpiarTextbox();
   } 
   }

   if (nombreAmigos.length === 5) {
      
      document.getElementById('amigo').disabled = true; // Deshabilito input de agregar
      document.getElementById('botonSorteo').disabled = false; 
   } 
   
      
  
}



function sortearAmigo(){
  
   if(nombreAmigos.length == 0){
      alert('No hay nombres para sortear');
      return;
   }

   const indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);
   const nombreSorteado = nombreAmigos[indiceAleatorio];

   document.getElementById('listaAmigos').innerHTML = ''; //limpio lista amigos 

   //muestro nombre 
   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `El nombre del amigo secreto es: ${nombreSorteado}`;

   // Deshabilito el botón de sortear
   document.getElementById('botonSorteo').disabled = true;
}

function limpiarTextbox(){
   document.getElementById('amigo').value = '';
}








