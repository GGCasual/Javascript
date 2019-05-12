var main = document.getElementById("container")
var div1 = document.createElement("div") //FIRST DIV
div1.textContent = "Hello"
main.appendChild(div1)

div1.setAttribute("class", "bg-primary")



var div2 = document.createElement("div") //SECOND DIV
main.appendChild(div2)
div2.textContent = "Curse of the Current Reviews"

div2.setAttribute("class", "bg-secondary")


var div3 = document.createElement("div") //THIRD DIV
main.appendChild(div3)
div3.textContent = "Hello WatchKit"

div3.setAttribute("class", "text-primary")



var div4 = document.createElement("div") //FOURTH DIV
main.appendChild(div4)
div4.textContent = "Introduction to Swift"

div4.setAttribute("class", "text-primary")