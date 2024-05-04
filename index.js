class Bank{
    #name;
    constructor(name){
        this.#name=name;
    }
    get Name(){
        return this.#name;
    }
}

class Account extends Bank{
    #balance;
    constructor(name,balance){
        super(name)
        this.#balance=balance;
    }
    get Balance(){
        return this.#balance;
    }
}

class SavingsAccount extends Account{
    #interestRate
    constructor(name,balance,interestRate){
        super(name,balance)
        this.#interestRate=interestRate;
    }
    set InterestRate(v){
        this.#interestRate=v
    }
    get InterestRate(){
        return this.#interestRate
    }
}

let a=new SavingsAccount("Ram",100000,5)
console.log(a.Name)