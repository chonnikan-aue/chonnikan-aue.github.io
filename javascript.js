document.getElementById("music").play();

function change(content) {
    document.getElementById("about").style.display = "none";
    document.getElementById("exp").style.display = "none";
    document.getElementById("skill").style.display = "none";
    if (content == "about") {
        document.getElementById("about").style.display = "block";
        document.getElementById("nav-exp").className = "navi";
        document.getElementById("nav-skill").className = "navi";
        document.getElementById("nav-about").className = "navi active";
    } else if (content == "exp") {
        document.getElementById("exp").style.display = "block";
        document.getElementById("nav-about").className = "navi";
        document.getElementById("nav-exp").className = "navi active";
        document.getElementById("nav-skill").className = "navi";
    } else if (content == "skill") {
        document.getElementById("skill").style.display = "block";
        document.getElementById("nav-about").className = "navi";
        document.getElementById("nav-exp").className = "navi";
        document.getElementById("nav-skill").className = "navi active";
    }
    document.getElementById("number").innerText = "";
}

function love() {
    document.getElementById("number").innerText = "Thanks for loving!";
    document.getElementById("pop").play();
}

function link(link) {
    window.open(link, "_blank");
}

function playSound() {
    document.getElementById("music").muted = !document.getElementById("music").muted;
    if (document.getElementById("musicButton").innerHTML == '<i class="bi bi-volume-mute-fill"></i>') {
        document.getElementById("musicButton").innerHTML = '<i class="bi bi-volume-down-fill"></i>';
    } else {
        document.getElementById("musicButton").innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
    }
}