var arr = [
    { songName: "Bezubaan(Phir se)", url: "./Songs/Bezubaan.m4a", img: "./Images/Bezubaan.jpg", time: "2:32" },
    
    { songName: "Chunar", url: "./Songs/Chunar.m4a", img: "./Images/Bezubaan.jpg", time: "2:50"},

    { songName: "Hamari Adhuri Kahani", url: "./Songs/Hamari.m4a", img: "./Images/Hamari.jpg", time: "2:12" },

    { songName: "Lambiyan Jhudaiyan", url: "./Songs/Lambiya.m4a", img: "./Images/Shersah.jpg", time: "2:52" },

    { songName: "Millionaire", url: "./Songs/Millionaire.m4a", img: "./Images/Millionaire.jpg", time: "2:38" },

    { songName: "Ranjha", url: "./Songs/Ranjha.m4a", img: "./Images/Shersah.jpg", time: "2:36" },
   
]

var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")



var audio = new Audio()

var selectedSong = 0

function mainFunction() {
    var clutter = ""

    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>${elem.time}</h6>
</div>`
    })
    allSongs.innerHTML = clutter

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0

play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})