$(function() {
    let url = "http://www.anapioficeandfire.com/api"

    $.get(url)
    .done((response) => {
        console.log(response.main.houses);
        Houses(response.main.houses)
    })

});



