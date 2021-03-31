const vibes = [
    "... and you are awesome",
    "... you are good",
    "... you are beautiful",
    "... you are strong  "

];

//choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor (vibes.length))];

//display a good vibe
document.querySelector(".vibe").append(vibe);