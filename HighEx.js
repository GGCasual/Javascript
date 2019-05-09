var main = document.getElementById("container")
var div1 = document.createElement("div") //FIRST DIV
div1.textContent = "Hello"
main.appendChild(div1)

div1.setAttribute("class", "bg-primary")

var div2 = document.createElement("div") //SECOND DIV
main.appendChild(div2)