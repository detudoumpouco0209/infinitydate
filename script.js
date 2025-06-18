function entrarSite() {
    document.getElementById('tela-inicial').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
}

const fotos = Array.from({length: 25}, (_, i) => `imagens/${i+1}.jpg`);

const frases = [
    "Cada momento contigo é meu pedaço de infinito. 💖",
    "Hoje, só tua presença vai me deixar feliz. 🌸",
    "Você só precisa existir para me completar.🌟",
    "Anoite e amanheça, beija eu. ❤️",
    "Você é a razão da minha felicidade. ❤️",
    "Tudo é melhor com você. ✨",
    "Pra você guardei o amor. 💕",
    "Você é a menina dos meus sonhos, garota, nunca amei ninguém como você! 🌹",
    "24 horas é pouco quando estou com você. 😍",
    "Meu riso é tão feliz contigo, meu melhor amigo é o meu amor. 📖",
    "E todas as canções que falam de amor, eu dedicaria a você. 💖",
    "Eu quero ver o mundodo jeito que eu vejo, um mundo com você. ☀️",
    "E eu ouvi falar de um amor que vem uma vez na vida e eu tenho certeza que você é esse amor meu. 🌈",
    "Casa, me deixe ir para casa, casa é qualquer lugar que eu esteja com você. 🏠",
    "Você é meu tevo de 4 folhas. 🍀",
    "Eu disse que nunca me apaixonaria, a menos que seja por você. ⚓",
    "Se a vida é um filme, você é a melhor parte. 💖",
    "Só sei te amar. 💘",
    "Algumas pessoas querem tudo, mas eu não quero absolutamente nada se não for você, amor. 🎁",
    "Algumas pessoas querem anéis de diamante, algumas pessoas apenas querem tudo, mas tudo significa nada se eu não tiver você. 💑",
    "Por você, eu dançaria tango no teto. 💞",
    "Eu amo você, menina. ✨",
    "Eu quero partilhar a vida boa com você. 💑",
    "Somos amor, somos eternidade. 💞",
    "Eu te amo infinito. ♾️❤️"
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

const emojis = ["❤️", "🌸", "🌹", "🐾", "🐶"];

function criarEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";

  document.querySelector('.emojis').appendChild(emoji);
  setTimeout(() => emoji.remove(), 6000);
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
