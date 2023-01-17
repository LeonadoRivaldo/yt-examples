function brincarComOCachorro(nVezes, proximoCusco) {
    console.log('eu to brincando com o ', cachorro);
    contador++;

    // outra palavra-chave if "SE"
    if (contador === nVezes) {
        cachorro = proximoCusco;
    }
};

/**
 * Apesar de todas essas variaves siginificarem o texto 'cachorro', pro javascript cada uma delas
 * é uma coisa unica que vivem em seu proprio espaço dento do computador.
 * Existe uma diferente entre o que é o valor de uma variavel e a variavel em si.
 *
 */
let cachorro, Cachorro, CACHORRO, CaChOrrO;

cachorro = 'rex';
Cachorro = cachorro;

// quando fazemos esse tipo de operação estamos lidando com o VALOR apenas.
console.log(cachorro === Cachorro);
console.log('O nome do cachorro é: ', Cachorro);

/** A palavra-chave while (enquanto) é um laço de repetição que serve para executar
 * um numero X de operações enquanto uma condição for verdadeira, porem WHILE, While ou wHile
 * não existem como palavra-chave no javascript pois ele diferencia entre maiusculas e minusculas.
 */
let contador = 0;

while (cachorro === 'rex') {
    brincarComOCachorro(5, 'toby');
};

console.log('agora vou brincarr com o', cachorro);

//ERRO!
/*
    WHILE(cachorro === 'toby'){
        brincarComOCachorro(5, 'fred');
    }
*/
// console.log('agora vou brincarr com o', cachorro);





























































