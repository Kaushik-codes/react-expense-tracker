import { useContext, useMemo } from "react"
import{ TransactionContext } from "../context/TransactionContext"


export default function BalanceCard(){
    const {transactions} = useContext(TransactionContext);

    const totalBalance = useMemo( () =>{
        return transactions.reduce((acc,tr)=>{
            return tr.type ==="income"
            ? acc + tr.amount
            : acc - tr.amount
        },0)
    }, [transactions]
    );
    return(
        <div className="group w-[40%] mt-5 h-25 p-3 mx-auto flex flex-col items-start bg-white  rounded-lg text-black hover:shadow-xl hover:shadow-cyan-500/50 hover:-translate-1 duration-300 ease-in-out">
            <h2 className="font-bold font-mono text-xl group-hover:text-teal-500 duration-300 ease-in-out">Balance</h2>
            <h1 className="font-bold text-4xl group-hover:text-[2.625rem] duration-300 ease-in-out">₹ {totalBalance}</h1>
        </div>
    )
}