//Colocando funções detro de objetos para exportar

function area(raio) {
    return Math.PI * raio * raio;
}

function perimetro(raio) {
    return 2 * Math.PI * raio;
}

const circulo = {
    area,
    perimetro
}

export default circulo;

