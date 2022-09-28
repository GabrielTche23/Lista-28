class Cliente{
    Nome
    Cpf
    DataNascimento
    constructor(nome,cpf,dataNascimento){
        this.Nome = nome
        this.Cpf = cpf
        this.DataNascimento = dataNascimento
    }
}

class PacoteViagem{
    Titular
    PassagemIda
    PassagemVolta
    ValorTotal
    constructor(passagemIda,passagemVolta,valorTotal){
        this.Titular = this.PassagemIda.Passageiro
        this.PassagemIda = passagemIda
        this.PassagemVolta = passagemVolta
        this.ValorTotal = valorTotal
    }
}

class Voo{
    Empresa
    Numero
    Data
    Horario
    LocalPartida
    LocalDestino
    constructor(empresa,numero,data,horario,localPartida,localDestino){
        this.Empresa = empresa
        this.Numero = numero
        this.Data = data
        this.Horario = horario
        this.LocalPartida = localPartida
        this.LocalDestino = localDestino
    }
}

class PassagemArea{
    Assento
    PrimeiraClasse
    Valor
    Passageiro
    Voo
    constructor(assento,primeiraClasse,valor,passageiro,voo){
        this.Assento = assento
        this.PrimeiraClasse = primeiraClasse
        this.Valor = valor
        this.Passageiro = passageiro
        this.Voo = voo
    }

    CalcularValor(valor){
        if(this.PrimeiraClasse){
            valor = valor + (0.50 * valor)
        }
        return valor
    }

    ExibirResumo(){
        console.log("Passagem em nome de ", this.Passageiro, "no assento", this.Assento, "do voo", this.Voo, "com o destino para", this.Voo.LocalDestino)
    }
}

let passagemAreaUm = new PassagemArea(2,true,2500,"Jose","nao sei")
let clienteUm = new Cliente("Jose","03156416","28/09/1845")
passagemAreaUm.CalcularValor(passagemAreaUm.valor)