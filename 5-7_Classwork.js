
// console.log("Hi")

var charSheet = {
    firstName : "Veronica",
    lastName : "Lino",
    location : "Houston"
}

// console.log(charSheet)

// console.log(charSheet['location'])

// delete charSheet['location']

// console.log(charSheet)




// var key = "firstName";

// // console.log(charSheet[key])

var keys = ['firstName', 'lastName', 'location'];

for(var i = 0; i < keys.length; i++){
    var keyName = keys[i];
    console.log(charSheet[keyName])
}



// var keys = ['firstName', 'lastName', 'location'];

// for(var i = 0; i < keys.length; i++){

//     console.log(charSheet[keys[i])
// }




mainDiv.appendChild(h1);

mainDiv.appendChild(img);



var innerDiv = document.createElement('div');

innerDiv.style = "background-color: yellow";

var innerH4 = document.createElement('h4');

innerH4.textConent = "hi";

innerDiv.appendChild(innerH4);

mainDiv.appendChild(innerDiv);



// Create and then Append(to something that already exists in document)

// b4