//map

let meuMap = new Map();
meuMap.set("nome", "gian");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome")

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

//for (let entrada of meuMap.entries()) {
//    console.log(entrada);
//}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// [nome => gian]
//[stack => html, css, js]

meuMap.delete("stack");

console.log(meuMap);

//set

const cpfs = new Set();

cpfs.add('454.823.130-77');
cpfs.add('051.906.180-21');
cpfs.add('781.336.450-34');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza'];

console.log(array);

const arrayComoSet = new Set([...array]);

console.log(arrayComoSet);

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arraySemItensDuplicados);