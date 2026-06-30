document.addEventListener("DOMContentLoaded", async () => {

    // 🔴 SOLO CAMBIA ESTO
    const SHEET_ID = "1L7NsIFSsWGr8cpDii5bAWUf5QQoaImf2ikDAUpemP6U";
    const SHEET_NAME = "Sheet1"; // cámbialo si tu pestaña tiene otro nombre

    const URL = `https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        console.log("Datos de Google Sheets:", data);

        // 🧠 Convertir datos
        const jugadores = data.map(item => ({
            nombre: item.nombre,
            puntos: Number(item.puntos),
            nivel: item.nivel
        }));

        // 🏆 Ordenar
        const ordenados = jugadores
            .filter(j => j.nombre && !isNaN(j.puntos))
            .sort((a, b) => b.puntos - a.puntos);

        // 🥇 TOP 3
        const top3 = document.getElementById("top3-container");

        if (top3) {
            top3.innerHTML = ordenados.slice(0, 3).map((j, i) => `
                <div class="card">
                    <h3>${i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</h3>
                    <h4>${j.nombre}</h4>
                    <p>${j.puntos} pts</p>
                </div>
            `).join("");
        }

        // 📊 RANKING
        const tbody = document.querySelector("#tablaRanking tbody");

        if (tbody) {
            tbody.innerHTML = ordenados.map((j, i) => `
                <tr>
                    <td>${i + 1}</td>
                    <td>${j.nombre}</td>
                    <td>${j.puntos}</td>
                    <td>${j.nivel}</td>
                </tr>
            `).join("");
        }

    } catch (error) {
        console.error("Error cargando Google Sheets:", error);
    }

});