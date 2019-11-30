import { Component, OnInit } from '@angular/core';

import { Account } from '../entities/account'

import { CurrentAccountService } from '../svcs/current-account.service'

@Component({
  selector: 'app-account-totals',
  templateUrl: './account-totals.component.html',
  styleUrls: ['./account-totals.component.css']
})
export class AccountTotalsComponent implements OnInit {

  accounts: Account[] = null;
  displayedColumns: string[] = ['TIPO', 'CONTO', 'SALDO'];

  constructor(private ccService : CurrentAccountService) { }

  ngOnInit() {
    this.ccService.getAccountList().subscribe(
      (data: Account[]) => { this.accounts = data },
      error => { this.accounts = [] }
    )
    //this.accounts = this.ccService.getAccountList();
  }

}
