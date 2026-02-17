import { useContext } from "react"
import { toast } from 'react-toastify';
import { TransactionContext } from "../context/TransactionContext"

export default function TransactionItem ( {transaction} ){
    const {deleteTransaction,editTransaction} = useContext(TransactionContext);

    // Date format customization
    function formatDate(dateStr) {
        const [year, month, day] = dateStr.split('-').map(Number);

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const suffixes = { 1: 'st', 2: 'nd', 3: 'rd' };
        const suffix = (day >= 11 && day <= 13) ? 'th' : (suffixes[day % 10] || 'th');

        return `${day}${suffix} ${months[month - 1]}, ${year}`;
    }

    return(
        <div className="border border-cyan-400 py-2 flex justify-center items-center relative">
            <li>
                <span className="font-bold text-lg">{transaction.category} </span>
                &nbsp;
                &nbsp;
                <span className={`font-bold font-mono text-lg ${transaction.type === 'expense' ? "text-red-500" : "text-lime-500"}`}>
                    {transaction.type === 'expense' ? "-" : "+"}₹{transaction.amount}
                </span>
                <span className="absolute right-25 top-3 text-gray-400 text-sm italic">{formatDate(transaction.date)}</span>
                <button className="absolute right-15 text-red-500 ml-4 cursor-pointer  hover:text-red-700 duration-200 ease-out" onClick={()=>deleteTransaction(transaction.id)}>
                    <span className="material-symbols-rounded">
                    delete
                    </span>
                </button>

                <button className="absolute right-6 text-yellow-400 cursor-pointer hover:text-yellow-600 duration-200 ease-out"
                onClick={()=>{
                    let newAmount = prompt("Enter new amount:");
                    if(newAmount===null) return;
                    newAmount = +newAmount;
                    if(Number.isFinite(newAmount) && newAmount > 0){
                        editTransaction(transaction.id,newAmount);
                    }else{
                        toast.error("New amount must be positive.", {
                        theme: "dark"
                        });
                    }
                }}
                >
                    <span className="material-symbols-rounded">
                    edit
                    </span>
                </button>
            </li>
        </div>
    )
}