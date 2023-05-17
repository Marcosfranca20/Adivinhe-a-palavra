
 const paises = ["brasil", "alemanha", "estados unidos", "belgica"];
 var erros = 0;
 var acertos = 0;
 var tentativas = "";
 palavraSecreta = paises[Math.floor(Math.random() * 6)]
 
 var c = document.getElementById("paises")
 var ctx = c.GetContext("2d")
 
 desenhaposte();
 desenhabarrasuperior();
 desenhaapoio();
 desenhatracos();
 
 window.onkeypress = teclaPressionada;
 
 function teclaPressionada() {
     if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).touppercase())) {
         adicionatentativa();
         for (var i= 0; i < palavraSecreta.length; i++) {
             if (palavraSecreta[i] == (event.key).touppercase()){
                 ctx.font = "35px arial";
                 ctx.fillText((event.key).touppercase(), 20 + (35 * i ), 200);
                 acertos++;
             }
         }
     } else {
         adicionatentativa();
 quantidadesdeErros++;
 desenhaBoneco(quantidadesdeErros)
     }
     verificafimdejogo();
 }
    
 function adicionaTentativa() {
 if (itentativas.includes(event.key)) {
     tentativas = tentativas + event.key;
     ctx.fillText("GAMER OVER! A palavra era : " + palavraSecreta, 200 , 100);
     
 }
 }
 
 function verificafimdejogo() {
 if (quantidadesdeErros >= 6) {
 ctx.font = "20px Arial";
 ctx.fillText("GAMER OVER! A palavra era: " + palavraSecreta);
 window.onkeypress = null;
 return;
 }
 if (acertos == palavraSecreta.length) {
     ctx.font = "20px Arial"
     ctx.fillText("Voce ganhou", 200, 100);
     window.onkeypress = null;
     return;
     }
 }
 
 function desenhaposte() {
     ctx.moveTo(10, 10);
     ctx.lineTo(10, 100);
     ctx.stroke();
 }
 
 
 function desenhabarrasuperior() {
     ctx.moveTo(10, 10);
     ctx.lineTo(60, 10);
     ctx.stroke();
 }
 
 function desenhaapoio() {
     ctx.moveTo(60, 10);
     ctx.lineTo(60, 30);
     ctx.stroke();
 }
 
 function desenhatracos() {
    for (var i = 0; i < palavraSecreta.length; i++) {
     ctx.moveTo(20 + (35 * i), 200);
     ctx.lineTo(50 + (35 * i), 200);
     ctx.stroke();
    }
 }
 function desenhaBoneco(){
     switch (quantidadesdeErros) {
         case 1:
             desenhacabeca();
          case 2:
              desenhatronco();
          case 3:
              desenhaBracoEsquerdo();
          case 4:
              desenhaBracoDireito();
          case 5:
              desenhaPernaEsquerda();
          case 6:
              desenhaPernaDireita();
              break                   
     }
 }
 
 function desenhacabeca() {
     ctx.beginPath();
     ctx.arc(60, 40, 10, 0, 2 * Math.PI);
     ctx.stroke();
 }
 
 function desenhatronco() {
     ctx.moveTo(60, 50);
     ctx.lineTo(60, 80);
     ctx.stroke();
 }
 
 function desenhaBracoEsquerdo() {
     ctx.moveTo(60, 60);
     ctx.lineTo(50, 70);
     ctx.stroke();
 }
 
 function desenhaBracoDireito() {
     ctx.moveTo(60, 60);
     ctx.lineTo(70, 70);
     ctx.stroke();
 }
 
 function desenhaPernaEsquerda() {
     ctx.moveTo(60, 80);
     ctx.lineTo(50, 90);
     ctx.stroke();
 }
 
 function desenhaPernaDireita() {
     ctx.moveTo(60, 80);
     ctx.lineTo(70, 90);
     ctx.stroke();
 } 
 
