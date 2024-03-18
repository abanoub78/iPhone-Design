let pic=document.getElementById("pic")
let goldBtn=document.getElementById("gold")
let blueBtn=document.getElementById("blue")
let grayBtn=document.getElementById("gray")
let redBtn=document.getElementById("red")
let body=document.querySelector(".body")
let btn=document.querySelector(".btn")


goldBtn.onclick=function(){
    changePhone(this.src)
    body.style.backgroundColor="#fccf4f"
    btn.style.backgroundColor="#fccf4f"
}

blueBtn.onclick=function(){
    changePhone(this.src)
    body.style.backgroundColor="#237dcb"
    btn.style.backgroundColor="#237dcb"
}

grayBtn.onclick=function(){
    changePhone(this.src)
    body.style.backgroundColor="#1e1e1e"
    btn.style.backgroundColor="#1e1e1e"
}



redBtn.onclick=function(){
    changePhone(this.src)
    body.style.backgroundColor="darkred"
    btn.style.backgroundColor="darkred"
}

function changePhone(phone){
    pic.src=phone
}