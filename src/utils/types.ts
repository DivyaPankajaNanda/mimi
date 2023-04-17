// User

export type UserSignin = {
    username : string
    password : string
}
  
export type UserSignup = {
    name : string
    username : string
    password : string
}


// Budget

export type Budget = {
    totalBudget : number,
    investmentBudget : number,
    savingBudget : number,
    expenseBudget : number,
    investmentAmount : number,
    savingAmount : number,
    expenseAmount : number,
    startDate : Date,
    endDate : Date,
}

// Transactions

export type TransactionIn = {
    title : string,
    description? : string,
    amount : number,
    categoryId? : string,
    type? : string,
    happinessQuotient? : number,
    necessityQuotient? : number,
}

export type TransactionOut = {
    id : string,
    title : string,
    description? : string,
    amount : number,
    categoryId? : string,
    type? : string,
    happinessQuotient? : number,
    necessityQuotient? : number,
}

// Goals

export type GoalIn = {
    title : string,
    description? : string,
    amountRequired : number,
    amountSaved : number,
    categoryId : string,
    type : string,
    startDate : string,
    endDate : string,
}

export type GoalOut = {
    id : string,
    title : string,
    description? : string,
    amountRequired : number,
    amountSaved : number,
    categoryId : string,
    type : string,
    startDate : string,
    endDate : string,
}