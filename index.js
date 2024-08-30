console.log("Trabalhando com Listas");

console.log("Cidades que já visitei:");

const saoPaulo = `São Paulo`
const curitiba = `Curitiba`
const morretes = `Morretes`
const fozdoIguacu = `Foz do Iguaçu`

console.log(saoPaulo, curitiba, morretes, fozdoIguacu);

const cidadesQueJaVisitei = new Array(
`São Paulo`,
`Curitiba`,
`Morretes`,
`Foz do Iguaçu`
);

cidadesQueJaVisitei.push(`Pato Branco`);

console.log(cidadesQueJaVisitei)

console.log(`A cidade mais linda:`);
console.log(cidadesQueJaVisitei[3]);

console.log(`Meus amigos me disseram que eu nunca fui a Morretes, eu estava muito bêbado e mentiram para mim`);

cidadesQueJaVisitei.splice(2, 1);
console.log(cidadesQueJaVisitei);