document.addEventListener("DOMContentLoaded", () => {

    console.log("Proyecto iniciado correctamente");

    const jugadores = [
        { nombre: "Jugador 1", puntos: 1000 },
        { nombre: "Jugador 2", puntos: 800 },
        { nombre: "Jugador 3", puntos: 600 },
        { nombre: "Jugador 4", puntos: 400 }
    ];

    const ordenados = jugadores.sort((a, b) => b.puntos - a.puntos);

    // 🏆 TOP 3
    const top3 = document.getElementById("top3");

    top3.innerHTML = ordenados.slice(0, 3).map((j, i) => `
        <div>
            ${i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
            ${j.nombre} - ${j.puntos}
        </div>
    `).join("");

    // 📊 RANKING
    const tbody = document.querySelector("#rankingTable tbody");

    tbody.innerHTML = ordenados.map((j, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${j.nombre}</td>
            <td>${j.puntos}</td>
        </tr>
    `).join("");

});