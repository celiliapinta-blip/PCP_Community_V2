/* ===========================
   PCP Community - app.js
   =========================== */

// Buscar jugador en la tabla
document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("buscarJugador");
    const table = document.getElementById("tablaRanking").getElementsByTagName("tbody")[0];

    input.addEventListener("keyup", function () {
        const filtro = input.value.toLowerCase();
        const filas = table.getElementsByTagName("tr");

        for (let i = 0; i < filas.length; i++) {
            let nombre = filas[i].getElementsByTagName("td")[1];

            if (nombre) {
                let texto = nombre.textContent || nombre.innerText;

                if (texto.toLowerCase().indexOf(filtro) > -1) {
                    filas[i].style.display = "";
                } else {
                    filas[i].style.display = "none";
                }
            }
        }
    });

});