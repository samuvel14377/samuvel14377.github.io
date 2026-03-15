let messages=[
"Initializing system scan...",
"Scanning device files...",
"Checking network security...",
"Analyzing system data...",
"⚠ Suspicious activity detected...",
"Removing threats...",
"System secure ✔"
]

let i=0

function showText(){

if(i<messages.length){

document.getElementById("output").innerHTML+=messages[i]+"<br>"

i++

setTimeout(showText,1200)

}

}

showText()
