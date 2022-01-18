import { Cliente } from "./Cliente.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
 constructor(agencia, cliente){
     super(0,cliente,agencia)
     ContaCorrente.numeroDeContas += 1;
    }
    
}
