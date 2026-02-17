import { useContext, useMemo } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionItem from "./TransactionItem";

export default function TransactionList (){
    const {transactions,filter,searchTerm} = useContext(TransactionContext);

    const filteredTransactions = useMemo(()=>{
        let result = transactions;

        if(filter != "all"){
            result = result.filter((tr)=>tr.type === filter);
        }

        if(searchTerm.trim() != ""){
            result = result.filter((tr)=>tr.category.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        return result
    },[transactions,filter,searchTerm]);

    return (
        <div className="bg-gray-900 w-6xl border border-cyan-200 mx-auto rounded-md mt-5">
            <ul>
            {  filteredTransactions.map(
                    (tr)=> (
                        <TransactionItem key={tr.id} transaction={tr}/>
                    )
                )
                }
            </ul>
        </div>
    )
}