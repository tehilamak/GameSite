var numberrandom
var x
var textanswer =""
var count
var allguesses=""
var arr=""
function start(l) {
    numberrandom = Math.floor(Math.random() * (101*l))
   
    count = 0
    textanswer = document.getElementById("answer")
    textanswer.innerText = ""
    allguesses = document.getElementById("arr")
    allguesses.innerText = ""
    arr = ""
    console.log(numberrandom)
  
    }


function guess()
{
    if (count < 10) {
        x = document.getElementById("try")
        if (x.value < numberrandom) {
            textanswer = document.getElementById("answer")
            textanswer.innerText = "יותר"
            textanswer.style.color="red"
           

        }
        else {
            if (x.value == numberrandom) {
                let game = document.getElementById("game")
                main.removeChild(game)
                backgraund.setAttribute("src", "pictures/bravo.png")
                
            }
            else {
                textanswer = document.getElementById("answer")
                textanswer.innerText = "פחות"
                textanswer.style.color="blue"
            }
        }
        count++
        arr=arr+" "+x.value
        allguesses = document.getElementById("arr")
        allguesses.innerText=arr
        
        if (count == 10)
        {
            let game = document.getElementById("game")
            main.removeChild(game)
            backgraund.setAttribute("src", "pictures/gameover.jpg")
            
        }
    }
    
}