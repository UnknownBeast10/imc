const form = document.querySelector(".form");
const Button = document.querySelector("button");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputPeso = event.target.querySelector("#input-peso");
    const inputAltura = event.target.querySelector("#input-altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido!', false);
        return;
    } 
    
     if(!altura) {
        setResultado("Altura inválida!", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    setResultado(`Seu imc é de ${imc} (${nivelImc}).`, true)
})

function criarParagrafos(msg) {
    const p = document.createElement("p");
    p.innerHTML = msg;
    return p;
}

function getNivelImc(imc) {
    const nivel = [
        "Abaixo do Peso",
        "Peso Normal",
        "Sobrepeso",
        "Obesidade Gráu 1",
        "Obesidade Gráu 2",
        "Obesidade Gráu 3"
    ];

    if(imc >= 39.9) return nivel[5];
    
    if(imc >= 34.9) return nivel[4];
    
    if(imc >= 29.9) return nivel[3];
    
    if(imc >= 24.9) return nivel[2];
    
    if(imc >= 18.5) return nivel[1];
    
    if(imc < 18.5) return nivel[0];
}

function getImc(v1, v2) {
    const imc = v1 / v2 ** 2;
    return imc.toFixed(2);
}

function setResultado(msg, isValid) {
    const divResultado = document.querySelector(".resultado");

    
    divResultado.innerHTML = "";
    const resultado = criarParagrafos(msg)
    divResultado.appendChild(resultado);
    if(isValid) {
        resultado.classList.add("resultadoMsg");
    } else {
        resultado.classList.add("bad");
    }
}