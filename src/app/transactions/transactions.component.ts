import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

import { Account } from '../entities/account'

import { CurrentAccountService } from '../svcs/current-account.service'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  accounts: Account[] = null;

  accountsDropDown = new FormControl('', [Validators.required]);

  constructor(private ccService : CurrentAccountService) { }

  ngOnInit() {
    this.accounts = this.ccService.getAccountList();
  }

}
