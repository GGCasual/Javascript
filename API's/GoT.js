$(function() {
    let url = "https://www.anapioficeandfire.com/api/characters"

    $.get(url)
    .done((response) => {
        console.log(response.main.characters);
        characters(response.main.characters)
    })

});



