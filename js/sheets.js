/* ===========================
   PCP Community - sheets.js
   Conexión con Google Sheets
   =========================== */

// 🔗 ID de tu Google Sheet
const SHEET_ID = "";

// URL para leer datos públicos
const BASE_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=`;

// 📊 Obtener datos de una hoja
async function getSheet(sheetName) {
    const response = await fetch(BASE_URL + sheetName);
    const text = await response.text();

    const json = JSON.parse(
        text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1)
    );

    return json.table.rows.map(row =>
        row.c.map(cell => (cell ? cell.v : ""))
    );
}

// 🏆 Cargar Ranking
async function cargarRanking() {
    const data = await getSheet("Ranking");

    let jugadores = data.slice(1).map(r => ({
        nombre: r[0],
        puntos: Number(r[1]),
        nivel: r[2]
    }));

    // Ordenar por puntos
    jugadores.sort((a, b) => b.puntos - a.puntos);

    // 🧾 Llenar tabla
    const tbody = document.querySelector("#tablaRanking tbody");
    tbody.innerHTML = "";

    jugadores.forEach((j, i) => {
        const row = `
            <tr>
                <td>${i + 1}</td>
                <td>${j.nombre}</td>
                <td>${j.puntos}</td>
                <td>${j.nivel}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });

    // 🥇 Top 3
    const top3 = document.getElementById("top3-container");

    top3.innerHTML = jugadores.slice(0, 3).map((j, i) => `
        <div class="card">
            <h3>${i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</h3>
            <h4>${j.nombre}</h4>
            <p>${j.puntos} pts</p>
        </div>
    `).join("");
}

// 🚀 Iniciar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarRanking();
});