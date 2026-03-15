let loginBtn=document.getElementById("loginBtn")
let modal=document.getElementById("loginModal")

loginBtn.onclick=function(){
modal.style.display="flex"
}

window.onclick=function(e){
if(e.target==modal){
modal.style.display="none"
}
}

let generateBtn=document.getElementById("generateBtn")

generateBtn.onclick=function(){

let prompt=document.getElementById("promptInput").value

document.getElementById("result").innerText=
"AI processing: "+prompt

}
