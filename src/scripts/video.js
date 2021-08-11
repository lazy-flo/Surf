const video = document.querySelector("#player");
const durationControl = document.querySelector('#durationLevel');
const soundControl = document.querySelector('#micLevel');

const playButtonVideo = document.querySelector(".video__player-img");

let interValId;
let soundLevel;
const MAX_SOUND_VALUE = 10;
const NORMAL_UPDATE_RANGE = 1000/66;

document.addEventListener('DOMContentLoaded', function() {

 // video.addEventListener('canplaythrough', ()=>{
  //  durationControl.max = video.duration;
 // })

durationControl.min = 0;
durationControl.value = 0;

soundControl.min = 0;
soundControl.max = MAX_SOUND_VALUE;

initPlayButton();
addListener();

})

function initPlayButton(){
  const playButtons = document.querySelectorAll(".play");
  playButtons.forEach(button => {
    button.addEventListener('click', playStop)
  })

  const micControl = document.querySelector('.sound__img');
  micControl.addEventListener('click', soundOf)
  
}

function addListener() {

  video.addEventListener('click',playStop)
  
  durationControl.addEventListener('click', setVideoDuration)

  soundControl.addEventListener('click', changeSoundVolume)

}

function playStop (){
  playButtonVideo.classList.toggle("video__player-img--hidden")

  durationControl.max = video.duration;

  if(video.paused){
    interValId = setInterval(updateDuration, NORMAL_UPDATE_RANGE)
    video.play();
   } else {
     stopInterval()
   }

}


function updateDuration() {
  durationControl.value = video.currentTime
}

function setVideoDuration(){
  video.currentTime = durationControl.value

  if(video.paused){
    video.play();
    playButtonVideo.classList.add('video__player-img--hidden')
  }
}

function stopInterval(){
  video.pause()
  clearInterval(interValId)
}

function soundOf(){
  if(video.volume === 0){
    console.log("on");
    video.volume = soundLevel;
    soundControl.value = soundLevel * MAX_SOUND_VALUE

  } else {
    console.log("off");
    soundLevel = video.volume;
    video.volume = 0;
    soundControl.value = 0;
  }
}

function changeSoundVolume(){
  video.volume = soundControl.value / MAX_SOUND_VALUE;
}
