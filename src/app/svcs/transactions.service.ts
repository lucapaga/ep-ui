import { Injectable } from '@angular/core';

import { AccountTransactions } from "../entities/account-transactions"
import { Account } from '../entities/account';
import { Transaction } from '../entities/transaction';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  top5TxPerAccount: AccountTransactions[];

  constructor(private http: HttpClient) { 
    this.top5TxPerAccount = [
      new AccountTransactions(
        new Account("8427983247928437", null, "COOP LUCA", null), 
        [
          new Transaction("7F8S97D8S798DSF79FS79SDF7", new Date("2019-11-19"), new Date("2019-11-18"), "Accredito Stipendio", 2450.00),
          new Transaction("7F8S97D8S79C8DC998CD99988", new Date("2019-11-18"), new Date("2019-11-18"), "Ricarica Satispay", -15.00),
          new Transaction("7F8S97D8S798DSF79I990CD90", new Date("2019-11-18"), new Date("2019-11-16"), "Pagamento Bancomat IPERCOOP Centro Nova", -93.41)
        ]),
      new AccountTransactions(
        new Account("7667C76C7D676767", null, "ING DIRECT CCA", null), 
        [
          new Transaction("787C98D797C9D7888C7787888", new Date("2019-11-19"), new Date("2019-11-18"), "Pagamento Bancomat SHELL Via Librandi", -40.02)
        ]),
      new AccountTransactions(
        new Account("78C7D897C987D98C", null, "WEBANK CC", null), 
        [
          new Transaction("AAASASSA88SA78S7A887SX22A", new Date("2019-11-19"), new Date("2019-11-18"), "Save", 1500.00)
        ]),
      new AccountTransactions(
        new Account("3435663427654732", null, "ING CONTO ARANCIO", null), 
        [])
    ];
  }


  getLastFiveTxsForAccount(account: Account): Observable<Transaction[]> {
    if(environment.transactionsService.mock) {
      return this.getLastFiveTxsForAccountNameMock(account.name);
    } else {
      return this.getLastFiveTxsForAccountName(account.name);
    }
  }

  getLastFiveTxsForAccountName(accountName: string): Observable<Transaction[]> {
    if(environment.transactionsService.mock) {
      return this.getLastFiveTxsForAccountNameMock(accountName);
    } else {
      return this.http.get<Transaction[]>(environment.transactionsService.baseUri + accountName + environment.transactionsService.trailingUri);
    }
  }

  getLastFiveTxsForAccountNameMock(accountName: string): Observable<Transaction[]> {
    for (var anAccountTx of this.top5TxPerAccount) {
      if (anAccountTx.account.name === accountName) {
        return of(anAccountTx.transactions);
      }
    }

    return of([]);
  }
}
