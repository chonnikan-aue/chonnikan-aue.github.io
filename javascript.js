function change(content) {
    document.getElementById("about").style.display = "none";
    document.getElementById("exp").style.display = "none";
    document.getElementById("skill").style.display = "none";
    if (content == "about") {
        document.getElementById("about").style.display = "block";
        document.getElementById("nav-exp").className = "";
        document.getElementById("nav-skill").className = "";
        document.getElementById("nav-about").className = "active";
    } else if (content == "exp") {
        document.getElementById("exp").style.display = "block";
        document.getElementById("nav-about").className = "";
        document.getElementById("nav-exp").className = "active";
        document.getElementById("nav-skill").className = "";
    } else if (content == "skill") {
        document.getElementById("skill").style.display = "block";
        document.getElementById("nav-about").className = "";
        document.getElementById("nav-exp").className = "";
        document.getElementById("nav-skill").className = "active";
    }
    i = 0;
    document.getElementById("number").innerText = "";
}

let i = 0;

function love() {
    i++;
    //document.getElementById("love").style.display = "block";
    document.getElementById("number").innerText = i;
}