export const initialState = {
    transactions: []
}

export const transactionReducer = (state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case "DELETE_TRANSACTION":
            return{
                ...state,
                transactions: state.transactions.filter(
                    (tr) => tr.id !== action.payload
                )
            }

        case "EDIT_TRANSACTION":
            return{
                ...state,
                transactions: state.transactions.map((tr)=>
                    tr.id === action.payload.id ?
                    {...tr,amount:action.payload.amount}
                    : tr
                )
            }

            default:
                return state;
    }
}