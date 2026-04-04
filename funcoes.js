function velocidade() {
    let d = Number(document.getElementById("distancia").value);
    let t = Number(document.getElementById("tempo").value);

    if (t > 0) {
        document.getElementById("resVel").innerText =
            "Velocidade = " + (d / t).toFixed(2) + " m/s";
    } else {
        document.getElementById("resVel").innerText =
            "Informe valores válidos.";
    }
}

function areaRetangulo() {
    let b = Number(document.getElementById("base").value);
    let h = Number(document.getElementById("altura").value);

    document.getElementById("resArea").innerText =
        "Área = " + (b * h) + " unidades²";
}

function converterTemp() {
    let c = Number(document.getElementById("celsius").value);
    let f = (c * 9/5) + 32;

    document.getElementById("resTemp").innerText =
        c + " °C = " + f.toFixed(1) + " °F";
}

function peso() {
    let m = Number(document.getElementById("massa").value);
    let g = 9.8;

    document.getElementById("resPeso").innerText =
        "Peso = " + (m * g).toFixed(2) + " N";
}
