let resultadoDado;
let lancamentos = 0;

while (resultadoDado !== 6) {
    resultadoDado = Math.floor(Math.random() * 6) + 1;
    lancamentos++;
    console.log(`lançamentos ${lancamentos}: resultado do dado: ${resultadoDado}`);
}

console.log(`finalmente! o número 6 foi obtido após ${lancamentos} lançamentos.`);