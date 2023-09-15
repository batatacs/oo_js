function auxMecanico(nome, idade, salario) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
}

function mecanico(nome, idade, salario) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
}

function encarregadoMec(nome, idade, salario) {
    this.nome = nome;
    this.idade = idade;
    let _salario = salario;

    this.getSalario = function () {
        return `O Salário do ${this.nome} teve um aumento 10% ao total de   ${_salario}`;
    }

    this.setSalario = function (valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function () {
        _salario = _salario * 1.1;
    }

}

const gustavo = new auxMecanico("Gustavo", 18, 2680);
const eduardo = new mecanico("Eduardo", 26, 3690);
const marcos = new encarregadoMec("Marcos", 40, 6800);

console.log(gustavo);
console.log(eduardo);
console.log(marcos);

marcos.aumento();
console.log(marcos.getSalario()); // Salário aumentado em 10%
