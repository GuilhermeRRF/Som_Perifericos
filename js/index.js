const barraProgresso = document.getElementById("progresso");
const audio = document.getElementById("audio");
const tempoAtual = document.getElementById("atual");
const tempoTotal = document.getElementById("total");
const voltar = document.getElementById("back");
const tocar = document.getElementById("play");
const avancar = document.getElementById("next");
const pulsar = document.querySelectorAll(".pulsar");

const musicaAtual = 0;

tocar.addEventListener("click", () => {
    if (!tocar.classList.contains("pause")) {
        tocar.setAttribute("src", "../img/home/pause.png");
        tocar.classList.add("pause");
        functionPulsar();
        audio.play();
    } else {
        tocar.classList.remove("pause");
        tocar.setAttribute("src", "../img/home/play.png");
        functionPulsar();
        audio.pause();
    }
});

voltar.addEventListener("click", () => {
    setMusicaAtual();
    audio.pause();
    tocar.classList.remove("pause");
    tocar.setAttribute("src", "../img/home/play.png");
});

avancar.addEventListener("click", () => {
    setMusicaAtual();
    audio.pause();
    tocar.classList.remove("pause");
    tocar.setAttribute("src", "../img/home/play.png");
});

function functionPulsar() {
    pulsar.forEach((element) => {
        element.classList.toggle("pulse");
    });
}

const setMusicaAtual = () => {
    barraProgresso.value = 0;
    audio.src = "../musics/home.mp3";
    tempoAtual.innerHTML = "00:00";

    setTimeout(() => {
        barraProgresso.max = audio.duration;
        tempoTotal.innerHTML = formatarTempo(audio.duration);
    }, 1000);
};

function formatarTempo(tempo) {
    let min = Math.floor(tempo / 60);
    let sec = Math.floor(tempo % 60);

    if (min < 10) {
        min = `0${min}`;
    }

    if (sec < 10) {
        sec = `0${sec}`;
    }

    return `${min} : ${sec}`;
}

setInterval(() => {
    tempoAtual.innerHTML = formatarTempo(audio.currentTime);
    barraProgresso.value = audio.currentTime;

    if (audio.currentTime == barraProgresso.max) {
        tocar.classList.remove("pause");
        tocar.setAttribute("src", "../img/home/play.png");
    }
}, 500);

barraProgresso.addEventListener("change", () => {
    audio.currentTime = barraProgresso.value;
});

setMusicaAtual();

// -------------- menu

const menu = document.getElementById("menu-principal");
const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open");
});
