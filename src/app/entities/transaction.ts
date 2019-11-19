export class Transaction {
    id: string;
    accountDate: Date;
    eventDate: Date;
    description: string;
    amount: number;

    constructor (
      id: string, 
      accountDate: Date,
      eventDate: Date,
      description: string,
      amount: number) {
        this.id = id;
        this.accountDate = accountDate;
        this.eventDate = eventDate;
        this.description = description;
        this.amount = amount;
    }
  }
