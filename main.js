// Video

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#videobtn1").onclick = function() {
        var myvideo1 = document.querySelector("#myvideo1");
        var videobtn1 = document.querySelector("#videobtn1");
        // play video
        if(videobtn1.innerText == "Play Video"){
            videobtn1.innerText = "Hide Video";
            document.querySelector("#deskImage").style.display = "none";
            myvideo1.style.display = "block";
            myvideo1.play();
        }
        else {
        // stop video
            myvideo1.pause();
            myvideo1.style.display = "none";
            document.querySelector("#deskImage").style.display = "block";
            videobtn1.innerText = "Play Video";
        }
    }
})

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#videobtn2").onclick = function() {
        var myvideo2 = document.querySelector("#myvideo2");
        var videobtn2 = document.querySelector("#videobtn2");
        // play video
        if(videobtn2.innerText == "Play Video"){
            videobtn2.innerText = "Hide Video";
            document.querySelector("#restImage").style.display = "none";
            myvideo2.style.display = "block";
            myvideo2.play();
        }
        else {
        // stop video
            myvideo2.pause();
            myvideo2.style.display = "none";
            document.querySelector("#restImage").style.display = "block";
            videobtn2.innerText = "Play Video";
        }
    }
})

// Light and Dark mode
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#switch").onclick = function() {
        if (document.querySelector("#switchinput").checked == true) { 
            console.log("dark");
            document.querySelector("body").classList.add("darkmode");
            document.querySelectorAll(".cardone").classList.add("darkmode");
        }
        else {
            document.querySelector("body").classList.remove("darkmode");
            document.querySelectorAll(".cardone").classList.remove("darkmode");
        }
    }
})
