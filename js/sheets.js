document.addEventListener("DOMContentLoaded", () => {

    const jugadores = [
        { nombre: "Jugador 1", puntos: 1200, nivel: "Oro" },
        { nombre: "Jugador 2", puntos: 900, nivel: "Plata" },
        { nombre: "Jugador 3", puntos: 700, nivel: "Bronce" },
        { nombre: "Jugador 4", puntos: 500, nivel: "Bronce" }
    ];

    // Ordenar jugadores por puntos
    const ordenados = jugadores
        .filter(j => j.nombre && j.puntos)
        .sort((a, b) => b.puntos - a.puntos);

    // TOP 3
    const top3 = document.getElementById("top3-container");

    top3.innerHTML = ordenados.slice(0, 3).map((j, i) => `
        <div class="card">
            <h3>${i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</h3>
            <h4>${j.nombre}</h4>
            <p>${j.puntos} pts</p>
        </div>
    `).join("");

});