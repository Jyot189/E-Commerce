export const depositMoney=(amount,no)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload: amount * no
        })
    }
}

export const withdrawMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload: amount
        })
    }
}