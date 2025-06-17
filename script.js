function entrarSite() {
    document.getElementById('tela-inicial').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
}

const fotos = Array.from({length: 25}, (_, i) => `imagens/${i+1}.jpg`);

const frases = [
    "Cada momento contigo é meu pedaço de infinito. 💖",
    "Te amo mais do que as palavras podem expressar. 🌸",
    "Nosso amor é leve, forte e eterno. 🌟",
    "Você é meu lar, meu amor, minha paz. 🏡",
    "Somos duas metades que se completam. ❤️",
    "Tudo é melhor com você. ✨",
    "Meu amor, minha vida, minha escolha. 💕",
    "Ao seu lado, tudo faz sentido. 🌹",
    "Você é meu sonho realizado. 😍",
    "Nossa história é minha favorita. 📖",
    "Te amo hoje, amanhã e sempre. 💖",
    "Você ilumina meus dias. ☀️",
    "Cada abraço seu é um pedaço de céu. 🌈",
    "O amor mora em nós. 🏠",
    "Com você, tudo é felicidade. 😊",
    "Você é meu porto seguro. ⚓",
    "Nosso amor é infinito. ♾️",
    "Só sei te amar. 💘",
    "Você é meu presente mais bonito. 🎁",
    "Amor verdadeiro, amor pra vida toda. 💑",
    "Sorte a minha ter você. 🍀",
    "Te amo além das palavras. ✨",
    "A vida é mais doce com você. 🍬",
    "Somos amor, somos eternidade. 💞",
    "Meu infinito é você. ♾️❤️"
];

let index = 0;

function trocarFoto() {
    const img = document.getElementById('slide');
    const frase = document.getElementById('frase');

    img.src = fotos[index];
    frase.textContent = frases[index % frases.length];

    index = (index + 1) % fotos.length;
}

setInterval(trocarFoto, 4000);

const emojis = ["❤️", "🌸", "🌹", "🐾"];

function criarEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.querySelector('.emojis').appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 6000);
}

setInterval(criarEmoji, 500);

// Garantir que só uma música toca por vez
const players = document.querySelectorAll('audio');

players.forEach(player => {
    player.addEventListener('play', () => {
        players.forEach(other => {
            if (other !== player) {
                other.pause();
            }
        });
    });
});
