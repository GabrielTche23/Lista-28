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

class PacoteViagem extends PassagemArea{
    Titular
    PassagemIda
    PassagemVolta
    ValorTotal
    constructor(titular,passagemIda,passagemVolta,valorTotal){
        this.Titular = titular
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

class PassagemArea extends Voo{
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
}