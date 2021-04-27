var successLyd = new Audio('../sounds/success.wav')
var fejlLyd = new Audio('../sounds/error.wav')


function check() {
    document.getElementById("rigtigtP").style.display = "none"
    document.getElementById("forkertP").style.display = "none"
    successLyd.pause();
    successLyd.currentTime = 0;
    fejlLyd.pause();
    fejlLyd.currentTime = 0;
    var input = document.getElementById("svar")
    var totalright = document.getElementById("totalright")
    var totaltried = document.getElementById("totaltried")
    var oversæt = document.getElementById("oversæt")
    totaltried.textContent = Number(totaltried.textContent) + 1
    if (input.value.toLowerCase() == oversæt.textContent.toLowerCase()) {
        totalright.textContent = Number(totalright.textContent) + 1
        successLyd.play()

        document.getElementById("rigtigtP").style.display = "block"
        document.getElementById("rigtigtOrd").textContent = oversæt.textContent.toLowerCase()
    } else {
        fejlLyd.play()
        document.getElementById("forkertP").style.display = "block"
        document.getElementById("duskullesvare").textContent = oversæt.textContent.toLowerCase()
        document.getElementById("forkertOrd").textContent = input.value.toLowerCase()

    }
    document.getElementById("percentageCorrect").textContent = Number(totalright.textContent) / Number(totaltried.textContent)
    input.value = ""
    oversæt.textContent = top300ord[Math.floor(Math.random() * top300ord.length)];

}

window.addEventListener("load", (event) => {   
    document.getElementById("oversæt").textContent = top300ord[Math.floor(Math.random() * top300ord.length)];
//fra https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp (dog lidt ændret)
document.getElementById("svar").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        check()
    }
})
})
