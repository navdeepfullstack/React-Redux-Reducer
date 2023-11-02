export const creditMoney = (amount)=> {
    return (dispatch)=>{
        dispatch({
            type : 'credit',
            payload : amount
        });
    }
}

export const debitMoney = (amount)=> {
    return (dispatch)=>{
        dispatch({
            type: 'debit',
            payload: amount
        });
    }
} 