function exemploVar () {
    var x = 10;
    if (true) {
        var x = 20; // mesma variavel x é redeclaeada dentro do bloco
        console.log(x); // 20
    }
    console.log(x); // 20 pois o valor foi alterado 
}