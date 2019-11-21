import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import { AccountTotalsComponent } from './account-totals/account-totals.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreateTxDialogComponent } from './create-tx-dialog/create-tx-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AccountTotalsComponent },
  { path: 'transactions', component: TransactionsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountTotalsComponent,
    TransactionsComponent,
    CreateTxDialogComponent
  ],
  entryComponents: [
    CreateTxDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatTableModule, MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule, MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
