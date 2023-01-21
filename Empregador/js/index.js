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

// -------------------------------------------------

$('#carousel').slick({
    dots: false,
    arrows: true,
    prevArrow: $('#leftArrow'),
    nextArrow: $('#rightArrow'),
    infinite: true,
    slidesToShow: 4,
    touchMove: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]    
});

$('#carousel2').slick({
    dots: false,
    arrows: true,
    prevArrow: $('#leftArrow2'),
    nextArrow: $('#rightArrow2'),
    infinite: true,
    slidesToShow: 4,
    touchMove: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]  
});

// ---------------------------


const menu = document.getElementById("menu-principal");
const menuIcon = document.getElementById("menu-icon-principal");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// ------------------------

// const artistas = document.querySelectorAll(".artista");

// artistas.forEach(element => {
//   element.addEventListener('click', () => {
    
//   })
// });