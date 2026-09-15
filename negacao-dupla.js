//valores falsy
console.log(!!0);      //false
console.log(!!"");     //false
console.log(!!null);    //false

//valores truythy
console.log(!!1);   //true
console.log(!!"texto");   //true
console.log(!![]);   //true (array vazio são objetos, logo são truthy)
console.log(!!{});   //true (objetos vazios são truthy)