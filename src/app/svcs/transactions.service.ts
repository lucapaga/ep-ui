import { Injectable } from '@angular/core';

import { AccountTransactions } from "../entities/account-transactions"
import { Account } from '../entities/account';
import { Transaction } from '../entities/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  top5TxPerAccount: AccountTransactions[];

  constructor() { 
    this.top5TxPerAccount = [
      new AccountTransactions(
        new Account("8427983247928437", null, null, null), 
        [
          new Transaction("7F8S97D8S798DSF79FS79SDF7", new Date("2019-11-19"), new Date("2019-11-18"), "Accredito Stipendio", 2450.00),
          new Transaction("7F8S97D8S79C8DC998CD99988", new Date("2019-11-18"), new Date("2019-11-18"), "Ricarica Satispay", -15.00),
          new Transaction("7F8S97D8S798DSF79I990CD90", new Date("2019-11-18"), new Date("2019-11-16"), "Pagamento Bancomat IPERCOOP Centro Nova", -93.41)
        ]),
      new AccountTransactions(
        new Account("7667C76C7D676767", null, null, null), 
        [
          new Transaction("787C98D797C9D7888C7787888", new Date("2019-11-19"), new Date("2019-11-18"), "Pagamento Bancomat SHELL Via Librandi", -40.02)
        ]),
      new AccountTransactions(
        new Account("78C7D897C987D98C", null, null, null), 
        [
          new Transaction("AAASASSA88SA78S7A887SX22A", new Date("2019-11-19"), new Date("2019-11-18"), "Save", 1500.00)
        ]),
      new AccountTransactions(
        new Account("3435663427654732", null, null, null), 
        [])
    ];
  }


  getLastFiveTxsForAccount(account: Account): Transaction[] {
    for (var anAccountTx of this.top5TxPerAccount) {
      if (anAccountTx.account.id === account.id) {
        return anAccountTx.transactions;        
      }
    }

    return [];
  }
}
