window.onload = function () {
    //Añadirle el evento on click a cada x de las fotos.
    var x = document.getElementsByClassName("close-x");
    for (var i = 0; i < x.length; i++) {
        x[i].addEventListener("click", onClose);
    }

    //Le añade el on click a restaurar fotos.
    document.getElementById('restore-photos').addEventListener('click', showPandas);
}

function onClose(event) {
    // target es una palabra reservada de js= el evento tiene un target al cual el elemento le hizo click, este evento es la x y este tiene un padre
    var padre = event.target.parentElement;
    // hide es una clase de boostrap que le coloca display:none en css al elemento.
    padre.classList.add("hide");
}

function showPandas() {
    var pandas = document.getElementsByClassName("panda-frame");
    for (var i = 0; i < pandas.length; i++) {
        pandas[i].classList.remove('hide');
    }
}