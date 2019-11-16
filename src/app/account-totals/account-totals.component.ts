import { Component, OnInit } from '@angular/core';

import { Account } from '../account'

@Component({
  selector: 'app-account-totals',
  templateUrl: './account-totals.component.html',
  styleUrls: ['./account-totals.component.css']
})
export class AccountTotalsComponent implements OnInit {

  accounts: Account[] = null;
  displayedColumns: string[] = ['TIPO', 'CONTO', 'SALDO'];

  constructor() { }

  ngOnInit() {
    this.accounts = [
      {id: "8427983247928437", type: "CC", name: "ING DIRECT CCA", amount: 1234.22},
      {id: "8427983247928437", type: "CC", name: "WEBANK CC", amount: 34.22},
      {id: "8427983247928437", type: "LIBRETTO", name: "COOP LUCA", amount: 234.22}
    ];
  }

}
