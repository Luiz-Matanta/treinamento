import{Conts} from "./Conta.js";

export class ContaPoupaca extends Conta {
constructor(saldoInicial,cliente, agencia){
    super (saldoInicial, cliente, agencia)
   
}
sacar(valor){
    const taxa = 1.02;
    this._sacar(valor,taxa);
    return this._sacar(valor,taxa);
}

}