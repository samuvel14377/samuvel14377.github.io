document.getElementById("generate-btn").addEventListener("click",function(){

let input=document.getElementById("ai-input").value
let message=document.getElementById("output-message")

if(input.trim()===""){
alert("Please type a prompt first")
}

else{

message.classList.remove("hidden")
message.innerText="Analyzing prompt..."

setTimeout(()=>{

message.innerText="AI Response Generated"
console.log("AI Output for: "+input)

},2000)

}

})
