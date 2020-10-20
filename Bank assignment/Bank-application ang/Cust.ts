 export interface Customer{
    custId
    custName
    custAddress
    
}
export interface CustomerAccount{
    customer:Customer
    account:Account
}