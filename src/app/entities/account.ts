export class Account {
    id: string;
    type: string;
    name: string;
    amount: number;

    constructor(
        id: string,
        type: string,
        name: string,
        amount: number){
            this.id = id;
            this.type = type;
            this.name = name;
            this.amount = amount;
    }
}
