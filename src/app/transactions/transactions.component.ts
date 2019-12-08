import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { MatSelectChange, MatSelect } from '@angular/material/select';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { v4 as uuid } from 'uuid';

import { switchMap } from 'rxjs/operators';

import { Account } from '../entities/account'

import { CurrentAccountService } from '../svcs/current-account.service'
import { TransactionsService } from '../svcs/transactions.service'
import { Transaction } from '../entities/transaction';
import { CreateTxDialogComponent } from '../create-tx-dialog/create-tx-dialog.component';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  showLoader: boolean = true;
  isLoadingAccounts: boolean = true;
  isLoadingTransactions: boolean = true;

  accounts: Account[] = [];
  accountsObservable : Observable<Account[]>;
  transactions: Transaction[] = null;
  selectedAccount: Account;
  selectedAccountName: string = "";

  accountsDropDown = new FormControl('', [Validators.required]);
  displayedColumns: string[] = ['accountDate', 'eventDate', 'description', 'amount'];

  @ViewChild('txListTbl', null) txListDataTable: MatTable<Transaction>;
  @ViewChild('accountsSelect', null) accountsSelect: MatSelect;

  constructor(
    private ccService : CurrentAccountService, 
    private txService: TransactionsService, 
    public dialog: MatDialog,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // TODO: OTTIMIZZARE!
    this.route.paramMap.subscribe(params => {
      var accountNameParam = params.get('accountName') || '';
      console.log("this.selectedAccountName is now '" + this.selectedAccountName + "'");

      this.ccService.getAccountList().subscribe(data => { 
        console.log(data);  
        this.accounts = data;
        this.doSelectAccount(accountNameParam);
      });

      this.doLoadLast10Txs(accountNameParam);
    });
  }

  onSelectCurrentAccount(selection: MatSelectChange) {
    console.log("Ecco la selezione: ", selection);
    this.isLoadingAccounts = true;
    this.isLoadingTransactions = true;
    this.doSelectAccount(selection.value);
    this.doLoadLast10Txs(selection.value);
  }

  doSelectAccount(accountName: string) {
    this.accounts.forEach(anAccount => {
      if(anAccount.name == accountName) {
        console.log("Trovato!");
        this.selectedAccount = anAccount;
        this.isLoadingAccounts = false;
        this.showLoader = (this.isLoadingAccounts || this.isLoadingTransactions);
      }
    });
  }

  doLoadLast10Txs(accountName: string) {
    this.selectedAccountName = accountName;
    console.log("selectedAccountName = ", this.selectedAccountName);

    if(accountName != null && accountName != "") {
      this.txService.getLastFiveTxsForAccountName(accountName).subscribe(data => {
        this.transactions = data;
        this.isLoadingTransactions = false;
        this.showLoader = (this.isLoadingAccounts || this.isLoadingTransactions);
      });
    } else {
      this.transactions = [];
    }
  }

  createNewTransaction(): void {
    const dialogRef = this.dialog.open(CreateTxDialogComponent, {
      width: '60%', height: '450px',
      data: {account: this.selectedAccount, transaction: new Transaction(uuid(), new Date(), new Date(), null, null)}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      if(result != null) {
        this.transactions.push(result);
        if(this.txListDataTable != null) {
          this.txListDataTable.renderRows();
        }
      }
    });
   }

}
