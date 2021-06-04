document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("myvideo").style.display = "none";
})

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("videobtn").onclick = function() {
        var myvideo = document.getElementById("myvideo");
        var videobtn = document.getElementById("videobtn");
        // play video
        if(videobtn.innerText == "Watch Video"){
            videobtn.innerText = "Hide Video";
            document.getElementById("deskimage").style.display = "none";
            myvideo.style.display = "block";
            myvideo.play();
        }
        else {
        // stop video
            myvideo.pause();
            myvideo.style.display = "none";
            document.getElementById("deskimage").style.display = "block";
            videobtn.innerText = "Watch Video";
        }
    }
})
