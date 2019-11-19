import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Account } from '../entities/account'

import { CurrentAccountService } from '../svcs/current-account.service'
import { TransactionsService } from '../svcs/transactions.service'
import { Transaction } from '../entities/transaction';
import { CreateTxDialogComponent } from '../create-tx-dialog/create-tx-dialog.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  accounts: Account[] = null;
  transactions: Transaction[] = null;
  selectedAccount: Account;

  accountsDropDown = new FormControl('', [Validators.required]);
  displayedColumns: string[] = ['id', 'accountDate', 'eventDate', 'description', 'amount'];

  constructor(private ccService : CurrentAccountService, private txService: TransactionsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.accounts = this.ccService.getAccountList();
  }

  onSelectCurrentAccount(selection: MatSelectChange) {
    //console.info("Selected account name '" + selection.value.name + "'. It has " + selection.value.amount + "€ in capacity");
    this.selectedAccount = selection.value;
    this.transactions = this.txService.getLastFiveTxsForAccount(selection.value);
  }

  createNewTransaction(): void {
    const dialogRef = this.dialog.open(CreateTxDialogComponent, {
      width: '250px',
      data: {account: this.selectedAccount, transaction: new Transaction(null, new Date(), new Date(), null, null)}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      this.transactions.push(result);
    });
   }

}
