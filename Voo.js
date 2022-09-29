class Cliente{
    #Nome
    #Cpf
    #DataNascimento
    constructor(nome,cpf,dataNascimento){
        this.Nome = nome
        this.Cpf = cpf
        this.DataNascimento = dataNascimento
    }

    DefinirNome(nome){
        this.#Nome = nome
    }
    BuscarNome(){
        return this.#Nome
    }
    DefinirCpf(cpf){
        this.#Cpf = cpf
    }
    BuscarCpf(){
        return this.#Cpf
    }
    DefinirDataNascimento(dataNascimento){
        this.#DataNascimento = dataNascimento
    }
    BuscarDataNascimento(){
        return this.#DataNascimento
    }

}

class PacoteViagem{
    #Titular
    #PassagemIda
    #PassagemVolta
    ValorTotal
    constructor(passagemIda,passagemVolta,valorTotal){
        this.#Titular = this.#PassagemIda.Passageiro
        this.#PassagemIda = passagemIda
        this.#PassagemVolta = passagemVolta
        this.#ValorTotal = valorTotal
    }
    DefinirTitular(titular){
        this.#Titular = titular
    }
    BuscarTitular(){
        return this.#Titular
    }
    DefinirPassagemIda(passagemIda){
        this.#PassagemIda = passagemIda
    }
    BuscarPassagemIda(){
        return this.#PassagemIda
    }
    DefinirPassagemVolta(passagemVolta){
        this.#PassagemVolta = passagemVolta
    }
    BuscarPassagemVolta(){
        return this.#PassagemVolta
    }
}

class Voo{
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino
    constructor(empresa,numero,data,horario,localPartida,localDestino){
        this.#Empresa = empresa
        this.#Numero = numero
        this.#Data = data
        this.#Horario = horario
        this.#LocalPartida = localPartida
        this.#LocalDestino = localDestino
    }

    DefinirEmpresa(empresa){
        this.#Empresa = empresa
    }
    BuscarEmpresa(){
        return this.#Empresa
    }
    DefinirNumero(numero){
        this.#Numero = numero
    }
    BuscarNumero(){
        return this.#Numero
    }
    DefinirData(data){
        this.#Data = data
    }
    BuscarData(){
        return this.#Data
    }
    DefinirHorario(horario){
        this.#Horario = horario
    }
    BuscarHorario(){
        return this.#Horario
    }
    DefinirLocalPartida(localPartida){
        this.#LocalPartida = localPartida
    }
    BuscarLocalPartida(){
        return this.#LocalPartida
    }
    DefinirLocalDestino(localDestino){
        this.#LocalDestino = localDestino
    }
    BuscarLocalDestino(){
        return this.#LocalDestino
    }
}

class PassagemArea{
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo
    constructor(assento,primeiraClasse,valor,passageiro,voo){
        this.#Assento = assento
        this.#PrimeiraClasse = primeiraClasse
        this.#Valor = valor
        this.#Passageiro = passageiro
        this.#Voo = voo
    }

    DefinirAssento(assento){
        this.#Assento = assento
    }
    BuscarAssento(){
        return this.#Assento
    }
    DefinirPrimeiraClasse(primeiraClasse){
        this.#PrimeiraClasse = primeiraClasse
    }
    BuscarPrimeiraClasse(){
        return this.#PrimeiraClasse
    }
    DefinirValor(valor){
        this.#Valor = valor
    }
    BuscarValor(){
        return this.#Valor
    }
    DefinirPassageiro(passageiro){
        this.#Passageiro = passageiro
    }
    BuscarPassageiro(){
        return this.#Passageiro
    }
    DefinirVoo(voo){
        this.#Valor = voo
    }
    BuscarVoo(){
        return this.#Voo
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
let vooUm = new Voo("1252","2","23/05","15:00","Brazil","Mexico")
let passagemAreaUm = new PassagemArea(2,true,2500,"Jose",vooUm)
let clienteUm = new Cliente("Jose","03156416","28/09/1845")
passagemAreaUm.CalcularValor(passagemAreaUm.valor)
passagemAreaUm.ExibirResumo()
