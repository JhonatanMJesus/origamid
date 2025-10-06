import numeroAleatorio from "./numeroAleatorio.js";
import quadrado from "./quadrado.js";

console.log(quadrado.areaQuadrado(5));
console.log(numeroAleatorio());

const precos = [
    'Crédito',
    'R$ 200',
    'R$ 400',
    'Contas a Pagar',
    'R$ 300',
    'R$ 400',
    'Meus dados' 
];

const precosFiltro = precos.filter((p) => p.includes('R$'));
const precosNumeros = precosFiltro.map((preco) => Number(preco.replace('R$ ', '')));

console.log(precosNumeros);

console.log(precosFiltro);