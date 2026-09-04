function exemploVar () {
    let x = 10;
    if (true) {
        let x = 20; // mesma variavel x é redeclaeada dentro do bloco
        console.log(x); // 20
    }
    console.log(x); // 20 pois o valor foi alterado 
}

exemploVar();