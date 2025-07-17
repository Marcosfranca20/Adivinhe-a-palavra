# 🕹️ Jogo da Forca com Canvas em JavaScript

Este projeto é uma implementação simples do **jogo da forca (Hangman)** usando `JavaScript` e `HTML5 Canvas`. O jogo sorteia um país aleatoriamente e permite que o jogador tente adivinhar a palavra letra por letra. A cada erro, uma parte do boneco é desenhada. O jogo termina quando o jogador adivinha toda a palavra ou comete 6 erros.

# Como Jogar
O jogo sorteia aleatoriamente uma palavra da lista de países.

O jogador digita letras no teclado.

Se a letra estiver correta:

Ela aparece no canvas na posição correta.

Se a letra estiver errada:

Uma parte do boneco é desenhada.

O jogo termina quando:

Todas as letras são acertadas (vitória).

O número máximo de erros (6) é atingido (derrota).
---

## 🧠 Funcionalidades

- Sorteio aleatório de palavras (nomes de países).
- Entrada de letras via teclado (`keypress`).
- Desenho das partes do corpo no canvas conforme erros.
- Mensagens de vitória e derrota.
- Traços desenhados representando cada letra da palavra secreta.
- Interface visual usando Canvas 2D.

---

## 🖥️ Pré-requisitos

- Navegador moderno com suporte a `Canvas` e `JavaScript`.
- Um elemento `<canvas>` com `id="paises"` no HTML:

```html
<canvas id="paises" width="800" height="300"></canvas>
<script src="forca.js"></script>

