
let allinputs=document.getElementsByTagName("input")
let  arrcolors=[]
let isexist
let p=game.getElementsByTagName("p")
let arrChoosen=[]
let arr=[]
let arr2=[]
let pg
let b


const chooseColor=(e)=>{
    p[0].style.display="none"
isexist=arrcolors.find(c => c == e.target.value)
if(isexist!=undefined)
p[0].style.display="block"
else
{arrcolors.push(e.target.value)
        let newButton = document.createElement("button")
        newButton.style.backgroundColor = arrcolors[arrcolors.length-1]
        newButton.setAttribute("id", arrcolors.length-1)
        newButton.setAttribute("draggable","true")
        newButton.classList.add("toolcolors")
        newButton.addEventListener("dragstart", (e) => {
          
            console.log(e.target);
            arrChoosen.push(arrcolors[e.target.getAttribute("id")])
            console.log(arrChoosen)
           
        })
       
        colors.appendChild(newButton)
        
}
if(arrcolors.length==8)
{
    start.style.display = "none"
    random()
    let button = document.createElement("input")
    button.setAttribute("type", "button")
    button.setAttribute("value", "תור נוסף")
    button.addEventListener("click", addturn)
    butn.appendChild(button)
   
}
console.log("arrcolors:"+arrcolors)
}
const random =()=>{
    let rnd
 
for (let index = 0; index <4; index++) {
    do
    { rnd=Math.floor(Math.random() * 8)
    isexist=arr.find(c => c == arrcolors[rnd])
    }
    while(isexist!=undefined)
    arr[index]=arrcolors[rnd]
    
}
console.log("arr:"+arr)

}

const addturn = () => {
    check()
    if (b==4)
    finish()
    let newgame=document.createElement("div")
    game1.appendChild(newgame)
    for (let index = 0; index < 4; index++) 
    {
        let newDiv = document.createElement("div")
        newDiv.setAttribute("id", index)
        newDiv.classList.add("divStyle")
        newDiv.addEventListener("drop", chooseColorInTurn)
        newDiv.addEventListener("dragover", (e) => {
            e.preventDefault()
        })
       
        newgame.appendChild(newDiv)
        for (let index = 0; index < arr2.length; index++) {
            arr2[index]=undefined
         }

    }
    for (let index = 0; index < 4; index++) {
        let newDiv = document.createElement("div")
        newDiv.setAttribute("id", index)
        newDiv.classList.add("bpStyle")
        newgame.appendChild(newDiv)
    }
   
    
}

const chooseColorInTurn2 = (e) => {
    e.preventDefault()
}


const chooseColorInTurn = (e) => {
   
  
    e.target.style.backgroundColor = arrChoosen[arrChoosen.length - 1]
    arr2[e.target.getAttribute("id")]=arrChoosen[arrChoosen.length-1]
}

const check=()=>{
    console.log("arr2:" + arr2)
    console.log("arr:"+arr)
b=0
pg=0
for (let i = 0; i <arr2.length ;i++) {
    for (let j = 0; j < 4; j++) {
        if(arr2[i]==arr[j])
        {if(i==j)
        b++
        else
        pg++}
        }

    }
let l
 let divs = game1.getElementsByTagName("div")
   
    for ( l = 0; l < b; l++) {

        divs[divs.length - 1 - l].classList.replace("bpStyle", "bclass")
        
}
for (let x = l; x < pg+l; x++) {
   
    divs[divs.length-1-x].classList.replace("bpStyle", "pclass")
   
}
}

const finish = () => {
    let game = document.getElementById("game")
    main.removeChild(game)
    backgraund.setAttribute("src", "pictures/bravo.png")

}
