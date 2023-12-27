import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    amount: 0,
}

export const slice=createSlice({
    name:'money',
    initialState,
    reducers:{
        depositeMoney:(state,action) =>{
            state.amount += action.payload
        },
        withdrawMoney:(state,action) =>{
            state.amount -= action.payload
        }
    }
})
  
export const {depositMoney,withdrawMoney}=slice.actions

export default slice.reducer