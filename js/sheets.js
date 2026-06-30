document.addEventListener("DOMContentLoaded", () => {

    console.log("JS funcionando");

    const jugadores = [
        { nombre: "Juan", puntos: 1000, nivel: "Oro" },
        { nombre: "Ana", puntos: 800, nivel: "Plata" },
        { nombre: "Luis", puntos: 600, nivel: "Bronce" }
    ];

    const top3 = document.getElementById("top3-container");
    const tbody = document.querySelector("#tablaRanking tbody");

    if (top3) {
        top3.innerHTML = jugadores.map((j, i) => `
            <div>
                ${i + 1}. ${j.nombre} - ${j.puntos}
            </div>
        `).join("");
    }

    if (tbody) {
        tbody.innerHTML = jugadores.map((j, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${j.nombre}</td>
                <td>${j.puntos}</td>
                <td>${j.nivel}</td>
            </tr>
        `).join("");
    }

});