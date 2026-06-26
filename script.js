const video =
document.getElementById("wildlifeVideo");

const button =
document.getElementById("actionButton");

button.addEventListener("click", () => {

if(video.style.display==="none"){
video.style.display="block";

if(video.paused){
video.play();
}

button.textContent="Hide Video";

}else{
video.style.display="none";
button.textContent="Show Video";
}

});
