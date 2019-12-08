import { Component, OnInit } from '@angular/core';

import { Account } from '../entities/account'

import { CurrentAccountService } from '../svcs/current-account.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-totals',
  templateUrl: './account-totals.component.html',
  styleUrls: ['./account-totals.component.css']
})
export class AccountTotalsComponent implements OnInit {

  accounts: Account[] = null;
  displayedColumns: string[] = ['TIPO', 'CONTO', 'SALDO', 'ACTION_BUTTONZ'];
  showLoader: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ccService : CurrentAccountService) { }

  ngOnInit() {
    this.ccService.getAccountList().subscribe(
      (data: Account[]) => { 
        this.accounts = data;
        this.showLoader = false;
      },
      error => { this.accounts = [] }
    )
    //this.accounts = this.ccService.getAccountList();
  }

  gotoTransactions(selectedAccount : Account) {
    this.router.navigate(['/transactions', { accountName: selectedAccount.name }]);
  }

}
