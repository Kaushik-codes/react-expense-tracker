import { useContext, useMemo } from "react"
import {TransactionContext} from "../context/TransactionContext"


export default function Summary (){
    const {transactions} = useContext(TransactionContext);

    const {income,expense} = useMemo( ()=>{
        let income = 0;
        let expense = 0;
        transactions.forEach((tr)=>{
            if (tr.type === "income"){
                income += tr.amount
            } else{
                expense += tr.amount
            }
        })

        return {income,expense}
    },[transactions]);

    return(
        <div className="flex flex-row fixed top-30 right-50 gap-4">
            {/* income summary */}
            <div>
                <h4 className="font-bold  text-3xl">Income</h4>
                <p className="text-lime-400 font-mono text-2xl w-auto border-2 border-blue-500 p-2 mt-2">₹ {income}</p>
            </div>
            {/* expense summary */}
            <div>
                <h4 className="font-bold   text-3xl">Expense</h4>
                <p className="text-red-500 text-2xl font-mono w-auto border-2 border-blue-500 p-2 mt-2">₹ {expense}</p>
            </div>
        </div>
    )
}