import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl } from '@angular/forms';

import { Account } from '../entities/account';
import { Transaction } from '../entities/transaction';

@Component({
  selector: 'app-create-tx-dialog',
  templateUrl: './create-tx-dialog.component.html',
  styleUrls: ['./create-tx-dialog.component.css']
})
export class CreateTxDialogComponent implements OnInit {
//  selectedTransaction: Transaction = null;
//  selectedAccount: Account = null;
//  eventDateFC: FormControl;
//  accountDateFC: FormControl;

  constructor(
    public dialogRef: MatDialogRef<CreateTxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateTxDialogData) { }

  ngOnInit() {
    //this.selectedTransaction = this.data.transaction;
    //this.selectedAccount = this.data.account;
    //this.eventDateFC = new FormControl(this.data.transaction.eventDate);
    //this.accountDateFC = new FormControl(this.data.transaction.accountDate);
  }

  onCancel(): void {
    console.log("Closing Dialog. Description='" + this.data.transaction.description + "'");
    this.dialogRef.close();
  }

  onConfirm(): void {
    console.log("Closing Dialog. Description='" + this.data.transaction.description + "'");
    this.dialogRef.close(this.data.transaction);
  }
}

export interface CreateTxDialogData {
  account: Account;
  transaction: Transaction;
}