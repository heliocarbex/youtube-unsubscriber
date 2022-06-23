var i = 0;

var myVar = setInterval(myTimer, 3000);

function myTimer() {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {

        els[i].querySelector("[aria-label^='Cancelar inscrição de']").click();

        setTimeout(function () {

            var unSubBtn = document.getElementById("confirm-button").click();

        }, 2000);

        setTimeout(function () {

            els[i].parentNode.removeChild(els[i]);

        }, 2000);

    }

    i++;

    console.log(i + " Canais desinscritos\n");

    console.log(els.length + " restando");

}
