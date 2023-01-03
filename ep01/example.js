let nome = 'Leonardo rivaldo';

function olaMundo(quem) {
    document.querySelector('h2').innerHTML = `Seja bem-vindo! ${quem}`;
    document.querySelector('body').style.opacity = '1';
}

let valor = 5 + 5;

console.log('eu sou executado imediatamente.');
console.log('eu tambem!', valor);

//escreve no arquivo
document.querySelector('p span').innerHTML = nome;

olaMundo(prompt('Olá quem é voce?'));