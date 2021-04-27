var successLyd = new Audio('../sounds/success.wav')
var fejlLyd = new Audio('../sounds/error.wav')
var multipleChoice = false

//Fra https://javascript.info/array-methods#shuffle-an-array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  
const ordFormatted = {
}
//Sorterer ordene efter længde
for (let i = 0; i < top300ord.length; i++) {
    const element = top300ord[i];
    if(ordFormatted[String(element.length)]) {
        ordFormatted[String(element.length)].push(element)
    } else {
        ordFormatted[String(element.length)] = []
        ordFormatted[String(element.length)].push(element)
    }
}

function multipleChoiceButtons(word) {
    if (ordFormatted[String(word.length)].length == 1) {
        newWord()
        return
    }
    var knapper = [word]
    var multipleChoiceDiv = document.getElementById("multiplechoice")
    multipleChoiceDiv.innerHTML = ""
    if(ordFormatted[String(word.length)].length < 4) {
        for (let i = 0; i < ordFormatted[String(word.length)].length - 1; i++) {
            var x = ordFormatted[String(word.length)][Math.floor(Math.random() * ordFormatted[String(word.length)].length)]
            while(knapper.includes(x)) {
                x = ordFormatted[String(word.length)][Math.floor(Math.random() * ordFormatted[String(word.length)].length)]
            }
            knapper.push(x)        }
    } else {
        for (let i = 0; i < 3; i++) {
            var x = ordFormatted[String(word.length)][Math.floor(Math.random() * ordFormatted[String(word.length)].length)]
            while(knapper.includes(x)) {
                x = ordFormatted[String(word.length)][Math.floor(Math.random() * ordFormatted[String(word.length)].length)]
            }
            knapper.push(x)
        }
    }
    
    shuffle(knapper)
    for (let i = 0; i < knapper.length; i++) {
        const element = knapper[i];
        multipleChoiceDiv.innerHTML += "<button class='button' onclick='check(\"" + element + "\")'>" + element + "</button>"
    }
}

function newWord() {
    oversæt.textContent = top300ord[Math.floor(Math.random() * top300ord.length)];
    if(!multipleChoice) {
        input = ""
    } else {
        multipleChoiceButtons(oversæt.textContent)
    }
}

function check(multiSvar) {
    document.getElementById("rigtigtP").style.display = "none"
    document.getElementById("forkertP").style.display = "none"
    successLyd.pause();
    successLyd.currentTime = 0;
    fejlLyd.pause();
    fejlLyd.currentTime = 0;
    var input
    if(multipleChoice) {
        input = multiSvar
    } else {
        
        input = document.getElementById("svar").value
    }

    var totalright = document.getElementById("totalright")
    var totaltried = document.getElementById("totaltried")
    var oversæt = document.getElementById("oversæt")
    totaltried.textContent = Number(totaltried.textContent) + 1
    if (input.toLowerCase() == oversæt.textContent.toLowerCase()) {
        totalright.textContent = Number(totalright.textContent) + 1
        successLyd.play()

        document.getElementById("rigtigtP").style.display = "block"
        document.getElementById("rigtigtOrd").textContent = oversæt.textContent.toLowerCase()
    } else {
        fejlLyd.play()
        document.getElementById("forkertP").style.display = "block"
        document.getElementById("duskullesvare").textContent = oversæt.textContent.toLowerCase()
        document.getElementById("forkertOrd").textContent = input.toLowerCase()

    }
    document.getElementById("percentageCorrect").textContent = Math.round(Number(totalright.textContent) / Number(totaltried.textContent) * 100)
    newWord()
    

}

window.addEventListener("load", (event) => {   
    newWord()
//fra https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp (dog lidt ændret)
document.getElementById("svar").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        check()
    }
})
})

function updateMultipleChoice(checkbox) {
    if(checkbox.checked) {
        multipleChoice = true
        document.getElementById("multiplechoice").style.display = "block"
        document.getElementById("typein").style.display = "none"
        multipleChoiceButtons(document.getElementById("oversæt").textContent)

    } else {
        multipleChoice = false
        document.getElementById("multiplechoice").style.display = "none"
        document.getElementById("typein").style.display = "block"
    }
}