let arrcards = []
let arrColors = []
let cards
let allcards = []
const startgame = level => {
    cards = document.getElementById('cards')
  
    allcards=cards.getElementsByTagName('div')
    let arrbuttons = []
    arrbuttons = document.getElementsByTagName('input')
    arrbuttons[0].style.display = "none"
    arrbuttons[1].style.display = "none"
    arrbuttons[2].style.display = "none"

    for (var i = 0; i < level * 2; i++)
    {
        
        allcards[i].style.display="inline-block"

    }
    
    console.log(cards)
   
    let red, green, blue, color
    for (let index = 0; index < level; index++) {
        let rnd
        rnd = Math.random()
        red = Math.round(rnd * 1000) % 255

        rnd = Math.random()
        green = Math.round(rnd * 1000) % 255

        rnd = Math.random()
        blue = Math.round(rnd * 1000) % 255
        arrColors.push("rgb(" + red + "," + green + "," + blue + ")")

    }
    console.log(arrColors)
    let arrPlaces=[]
    let count = 0
    let isExit
    for ( index = 0; index < level * 2; index++) {
        do {
            rnd = Math.floor(Math.random() * (level*2))
            isExit = arrPlaces.find(c => c == rnd)
        }
        while (isExit != undefined);
        arrPlaces.push(rnd)
        arrcards[rnd] = arrColors[count]
        if (index % 2 == 1)
            count++
    }
    console.log(arrcards)
}
const finish = count => {
    let game = document.getElementById("game")
    main.removeChild(game)
    backgraund.setAttribute("src", "pictures/bravo.png")

   

}
let firstCard
let count = 0
let count2 = 0;
const choosecard = id => {
    count++
    console.log(id)
    console.log("עובד")
    let card = document.getElementById(id)
    console.log(card)
    card.style.backgroundColor = arrcards[id]

    if (count % 2 == 1) {
        firstCard = id
        console.log(firstCard)
    }
    else {
        
        if (arrcards[firstCard] == arrcards[id]) {
            {
                count2++
            }
            console.log(count2)
            if (count2 == arrcards.length / 2) {
                finish(count)
            }
                
        }
        else {
            setTimeout(() => {
            
                console.log("אני פה")
                card.style.backgroundColor = "white"
                card = document.getElementById(firstCard)
                card.style.backgroundColor = "white"
          },800)
        }
    }
}

