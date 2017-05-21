var pictures = ["main/img/a1.jpg", "main/img/a2.jpg", "main/img/a3.jpg", "main/img/a4.jpg"]

pictures.forEach(function(el, i) {
    var container = document.getElementById('pictures'); //Search for the id where i want to put my pictures
    var crearDiv = document.createElement('div'); //create the div element
    crearDiv.setAttribute("class", "panda"); // create the class attribute  & panda attribute
    var creaFoto = document.createElement('img'); //create the img element
    creaFoto.src = pictures[i]; //source for the picture
    creaFoto.id = 'a' + (i + 1);

    crearDiv.appendChild(creaFoto);
    container.appendChild(crearDiv);
});