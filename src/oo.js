//function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//    this.nome = nomeDoPokemon;
//    this.tipo = tipoDoPokemon;
//}

//const pikachu = new Pokemon("Pikachu", "elétrico");

class Pokemon {
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}

const pikachu = new Pokemon('Pikachu', 'elétrico');
const pikachuDoAsh = new Pikachu()//('Pikachu', 'elétrico');
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico';

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000

console.log(pikachuDoAsh.hp);

pikachuDoAsh.atacar('choque do trovão');

pikachuDoAsh.exibeHp();

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);