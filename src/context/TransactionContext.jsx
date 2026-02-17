import { initialState, transactionReducer } from '../reducer/transactionReducer'
import { createContext, useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';

export const TransactionContext = createContext(); // empty global box

export default function TransactionProvider({children}){
    const initializer = () => {
      let storedTransactions = localStorage.getItem("transactions");

      return(
        {
          transactions: storedTransactions
          ? JSON.parse(storedTransactions)
          : []
        }
      )
    }

    const [state, dispatch] = useReducer(
      transactionReducer,
      initialState,
      initializer
    )

    useEffect(()=>{
      localStorage.setItem(
        'transactions',
        JSON.stringify(state.transactions)
      )
    },[state.transactions])

    const [filter,setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    

    const addTransaction = (transaction)=>{
      dispatch({type:"ADD_TRANSACTION",payload:transaction});
    };

    const deleteTransaction = (id)=>{
    toast.success("Transaction deleted!",{
                        theme: "dark"
                        });
    dispatch({type:"DELETE_TRANSACTION",payload:id});
  };

    const editTransaction = (id,newAmount)=>{
      dispatch({type:"EDIT_TRANSACTION",payload:{id,amount:newAmount}});
    };

  return(
    <TransactionContext.Provider
    value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        editTransaction,
        filter,
        setFilter,
        searchTerm,
        setSearchTerm
    }}
    >
        {children}
    </TransactionContext.Provider>
  )

}