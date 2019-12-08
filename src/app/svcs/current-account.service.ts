import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Account } from '../entities/account'

@Injectable({
  providedIn: 'root'
})
export class CurrentAccountService {

  accounts: Account[] = null;

  constructor(private http: HttpClient) { }

  getAccountList() : Observable<Account[]> {
    /*
    this.accounts = [
      {id: "8427983247928437", type: "CC", name: "ING DIRECT CCA", amount: 1234.22},
      {id: "7667C76C7D676767", type: "CC", name: "WEBANK CC", amount: 34.22},
      {id: "78C7D897C987D98C", type: "CDEP", name: "ING CONTO ARANCIO", amount: 1834.22},
      {id: "3435663427654732", type: "LIBRETTO", name: "COOP LUCA", amount: 234.22}
    ];
    */
    //return this.accounts;
    var retVal = null;

    if(this.accounts != null) {
      retVal = of(this.accounts);
    } else {
      retVal = this.http.get<Account[]>('/epi/accounts/list');
      retVal.subscribe(
        (data: Account[]) => { 
          this.accounts = data;
        },
        error => { this.accounts = [] }
      );
    }

    return retVal;
  }
}
