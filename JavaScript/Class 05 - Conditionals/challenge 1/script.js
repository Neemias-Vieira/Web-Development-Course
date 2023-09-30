// Crie uma função para calcular média do aluno
// A média da escola é 7 e ela realiza duas provas
// Apresente a média e a situação se aprovado ou reprovado

document.addEventListener("keydown", function(event) {
   if (event.key === "Enter") {
       iniciar(); // Substitua 'minhaFuncao' pelo nome da sua função
   }
});

function iniciar() {
   
   let nota1 = prompt("Digite a primeira nota:");
   let nota2 = prompt("Digite a segunda nota:");
   nota1 = nota1.replace(",", ".");
   nota2 = nota2.replace(",", ".");
   nota1 = Number(nota1);
   nota2 = Number(nota2);
   
   if (nota1 <= 10 && nota1 >= 0 && nota2 <= 10 && nota2 >= 0) {
      const result = somaMedia(nota1, nota2);
      alert(result);
   }else{
      alert("digite notas de 0 a 10");
   }
   
}

function somaMedia(nota1, nota2) {
   let media = (nota1 + nota2) / 2;
   media = media.toFixed(2);
   let mediaI = media;
   media.toString();
   media = media.split(".");
   let decimal = media[1];
   media = media[0] + "." + media[1];
   
   

   let substituir = decimal;

   if (decimal > 0 && decimal < 25) {
      decimal = 0;
      media = String(media).replace(substituir, decimal);
   }
   else if(decimal >= 25 && decimal < 75){
      decimal = 50;
      media = String(media).replace(substituir, decimal);
   }
   else if(decimal >= 75 && decimal <= 99){
      decimal = 0;
      media = String(media).replace(substituir, decimal);
      media = Number(media);
      media = media + 1;
   }

const medias = `Media inicial: ${mediaI} \nMedia arredondada: ${media}\n`;
let situação;

   if (media >= 7 && media <= 10) {
      situação = `${medias}Você está aprovado(a). Possui ${media - 7} ponto(s) a mais em relação a média \nMEDIA ESCOLAR: 7`;
        
   }
   else if(media >= 0 && media < 7){
      situação = `${medias}Você está reprovado(a). Nececesita-se de mais ${7 - media} ponto(s) \nMEDIA ESCOLAR: 7`;
   }
   
   return situação;

}