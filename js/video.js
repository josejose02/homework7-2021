window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

const video = document.getElementById("player1");

document.querySelector("#play").addEventListener("click", function() {
	console.log("[Video] Play");
	video.play();
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("[Video] Pause");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.95;
	console.log("[Video] New playback rate: "+video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*1.05;
	console.log("[Video] New playback rate: "+video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	var current_time = video.currentTime;
	if(current_time+15<video.duration){
		video.currentTime = current_time + 15;
	} else {
		video.currentTime = 0;
	}
	console.log("[Video] Jumped from second " + current_time + " to second " + video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	video.volume = 0;
	console.log("[Video] Volume Muted");
})

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value/100;
	console.log("[Video] Volume: "+video.volume);
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
	console.log("[Video] Changed Themer: Old School");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log("[Video] Changed Themer: Default");
})