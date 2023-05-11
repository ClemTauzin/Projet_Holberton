document.addEventListener("DOMContentLoaded", function() {
    let thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "small") {
            thumbnailElement.className = "big"
        }
        else{
            thumbnailElement.className = "small"
        }      
    });

    
});

window.onload = ()=>{
    let symbol = [" "," "," "," "," ","&#9608;","&#9600;","&#9613;","&#9602","&#9604;", "&#9625;","&#9627;","&#9626;","&#9630;","&#9631;","&#9628;","&#9645;","&#9647;","&#9650;","&#9651;","&#9654;","&#9671;","&#9673;","&#9675;","&#9680;","&#9698;","&#9699;","&#9700;","&#9701;","&#9703;","&#9704;","&#9705;","&#9706;","&#9712;","&#9713;","&#9714;","&#9715;","&#9786;","&#9787;"];
    let glitch = document.querySelector("#glitchedTitle")
    setInterval(() => {
        randomSymbol = ""
        for (let i = 0; i < 12; i++) {
            randomSymbol = randomSymbol + symbol[(Math.floor(Math.random()*symbol.length))]                
        }
        glitch.innerHTML = randomSymbol
        setTimeout(() => {
            randomSymbol = ""
            glitch.innerHTML = ""
            for (let i = 0; i < 12; i++) {
                randomSymbol = randomSymbol + symbol[(Math.floor(Math.random()*symbol.length))]                
            }
            glitch.innerHTML = randomSymbol
        }, 300);
        setTimeout(() => {
            randomSymbol = ""
            glitch.innerHTML = ""
            for (let i = 0; i < 12; i++) {
                randomSymbol = randomSymbol + symbol[(Math.floor(Math.random()*symbol.length))]                
            }
            glitch.innerHTML = randomSymbol
        }, 500);
        setTimeout(() => {
            randomSymbol = ""
            glitch.innerHTML = ""
            for (let i = 0; i < 12; i++) {
                randomSymbol = randomSymbol + symbol[(Math.floor(Math.random()*symbol.length))]                
            }
            glitch.innerHTML = randomSymbol
        }, 600);
        setTimeout(() => {
            randomSymbol = ""
            glitch.innerHTML = ""
            for (let i = 0; i < 12; i++) {
                randomSymbol = randomSymbol + symbol[(Math.floor(Math.random()*symbol.length))]                
            }
            glitch.innerHTML = randomSymbol
        }, 650);
        setTimeout(() => {
            randomSymbol = ""
            glitch.innerHTML = ""
            for (let i = 0; i < 12; i++) {
                randomSymbol = randomSymbol + symbol[(Math.floor(Math.random()*symbol.length))]                
            }
            glitch.innerHTML = randomSymbol
        }, 700);
        setTimeout(() => {
            randomSymbol = ""
            glitch.innerHTML = ""
            for (let i = 0; i < 12; i++) {
                randomSymbol = randomSymbol + symbol[(Math.floor(Math.random()*symbol.length))]                
            }
            glitch.innerHTML = randomSymbol
        }, 750);
        setTimeout(() => {
            randomSymbol = ""
            glitch.innerHTML = "Clément Tauzin"
        }, 800);
    }, 5000);
}