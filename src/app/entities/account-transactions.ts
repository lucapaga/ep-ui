import { Transaction } from './transaction';
import { Account } from './account';

export class AccountTransactions {
    account: Account;
    transactions: Transaction[];

    constructor(account: Account,
        transactions: Transaction[]){
            this.account = account;
            this.transactions = transactions;
        }
}
