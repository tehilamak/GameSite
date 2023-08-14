
    let arr1=[,"אריה","נמר","פיל","נחש","הפופותם","גירפה","קוף" ,"לביאה", "טיגריס"
    ,"יעל","רחל","צפרדע","נמלה","עכביש","צבי","גדי","פרפר","קרפדה","צרצר","כבש","עורב","יונה"
    ,"ציפור","תוכי","סממית","לטאה","זיקית","פינגוין","מקק","דג"]

    let  arr2=["פלפל","גזר","מלפפון","תפוח","תפוז","עגבניה","בצל","אשכולית","פומלה"
     ,"אבטיח","אפרסק","מלון","לימון","שזיף","אפרסמון","מנגו","אננס","אבוקדו","ורד","ליצי"
     ,"נרקיס","שושנה","נענע","פסיפלורה","קקטוס","פרח","עלה","עץ","סברס"]
   

    let arr3=["חולצה","ספר","מחשב","תנור","כיור","קולב","מיטה",
    "ארון","שולחן","כיסא","ספה","שקית","מכנסיים",
    "כובע", "אנציקלופדיה", "מרצפת", "וילון", "סופרמרקט", "אמבטיה", "פטיפון", "מגלזה", "אקנומיקה", "סבון", "ספוג"]

let str2 = "א,ב,ג,ד,ה,ו,ז,ח,ט,י,כ,ל,מ,ם,נ,ן,ס,ע,פ,ף,צ,ץ,ק,ר,ש,ת"
    let word
    let input1
    let input2
    let input3
    let input
let code
let str
let c
let game = document.getElementById("main_game")
    let allinputs=game.getElementsByTagName("input")
    const begin=(e)=>{
        allinputs[0].style.display="none"
        allinputs[1].style.display="none"
        if (e.target.value == "שני שחקנים")
        {
           let input=document.createElement("input")
            input.setAttribute("type", "text")
            input.setAttribute("placeholder", "שחקן א' הקלד כאן את מילת הצופן")
            input.addEventListener("keyup", (event) => {
                if (str2.indexOf(event.target.value[event.target.value.length - 1]) == -1) {
                    event.target.value=""
                }
            })
           input.addEventListener("change", (event) => {
               game.removeChild(input)
            word=event.target.value 
            console.log(word)
            Game()
        })
            game.appendChild(input)
       }
       else
       {
         input1=document.createElement("input")
           input1.setAttribute("type","button")
           input1.setAttribute("value","חי")
           input1.addEventListener("click",random )
           game.appendChild(input1)
            input2=document.createElement("input")
           input2.setAttribute("type","button")
           input2.setAttribute("value","צומח")
           input2.addEventListener("click",random )
           game.appendChild(input2)
            input3=document.createElement("input")
           input3.setAttribute("type","button")
           input3.setAttribute("value","דומם")
           input3.addEventListener("click", random)
           
           game.appendChild(input3)

       }
       
}
   

    
const random = (e) => {
    console.log("פה")
    let game = document.getElementById("main_game")
    
        game.removeChild(input1)
        game.removeChild(input2)
       game.removeChild(input3)
        if(e.target.value=="חי")
    {
        let rnd=Math.floor(Math.random()*arr1.length)
        word=arr1[rnd]
    }
    if(e.target.value=="צומח")
    {
        let rnd=Math.floor(Math.random()*arr2.length)
        word=arr2[rnd]
    }
    if(e.target.value=="דומם")
    {
        let rnd=Math.floor(Math.random()*arr3.length)
        word=arr3[rnd]
    }
console.log(word)
Game()
    }

    const Game=()=>{
        
        for (let index = 0; index < word.length; index++) {
           let newdiv=document.createElement("div")
           newdiv.classList.add("div")
           newdiv.setAttribute("id",index)
            game.appendChild(newdiv)
            
        }
        let text=document.createElement("input")
        text.setAttribute("type","text")
        text.setAttribute("id", "inp")
        text.addEventListener("change", (e) => {
            if (e.target.value.length > 1) {
                e.target.value = ""
                alert("באפשרותך להזין אות אחת בלבד")
                code = undefined
            }
            
            else
            {
                if (str2.indexOf(e.target.value) == -1)
                {
                    e.target.value = ""
                    alert("באפשרותך להזין אות מהמחסן אותיות בלבד")
                }
                else {
                c = e.target.value
                    console.log(c)
                }
             }
            
        })
        text.addEventListener("keydown",Code)
        game.appendChild(text)

        str = document.createElement("p")
        str.innerText=str2
        game.appendChild(str)
       

        let button=document.createElement("input")
        button.setAttribute("type","button")
        button.setAttribute("value","ok")
        button.addEventListener("click",check)
        game.appendChild(button)
       
    }
    

const Code = (e) => {
    console.log(e.keyCode)
      
           Code = e.keyCode

}
let divs = game.getElementsByClassName("div")
   const check=()=>{
       input=document.getElementById("inp")
       input.value = ""
       for (var i = 0; i < str2.length && c != str2[i]; i += 2); 
           if (i==0)
               str2 = str2.slice(2, str2.length)
           else 
                str2 = str2.slice(0, i - 1)+str2.slice(i + 1, str2.length)
      
       str.innerText=str2
       
       var flag = 1
       var flag2=0
       for (let index = 0; index < word.length; index++) {
           if (c == word[index])
           {
               divs[index].innerText = c
               flag = 2
           }
       }
       if (flag == 1)
           error()
       for (let index = 0; index < divs.length; index++) {
           if (divs[index].innerText == "")
               flag2=1
       }
       console.log("flag2:"+flag2)
       if (flag2 == 0)
           finish(1)
}




let he = 500;
const error = () => {
    console.log("הי")
    he = he - 50
    if (he == 0)
        finish(0)
    console.log(he)
    let aman = document.getElementById("aman")
    aman.style.height = he + 'px'
    console.log(aman.style.height)
    
}

const finish = (n) => {
    console.log("הי")
    let game = document.getElementById("game")
    main.removeChild(game)
    
    if (n == 0) {
        backgraund.setAttribute("src", "pictures/gameover.jpg")
    }

    else {
        backgraund.setAttribute("src", "pictures/bravo.png")
       
    }

}

