import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { TransactionContext } from "../context/TransactionContext";

export default function AddTransaction(){
    const {addTransaction} = useContext(TransactionContext);

    const [amount,setAmount] = useState("");
    const [type, setType] = useState("expense");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const typeColor = type === 'expense'?'text-red-500' : 'text-green-400';
    function success(){
        toast.success('Transaction added!',{
                        theme: "dark"
                        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        success();

        const newTransaction = {
            id: uuidv4(),
            amount: +amount,    //shortcut of Number(amount)
            type,   //shorthand for type: type
            category,   //shorthand for category: category
            date,   //shorthand for date: date
        }

        addTransaction(newTransaction);

        setAmount("");
        setCategory("");
        setDate("");
    }

    return(
        <form onSubmit={handleSubmit}
        className="border border-amber-400 mt-6 p-3 rounded-lg bg-gray-900"
        >
            <h3 className="text-cyan-500 text-xl font-bold mb-3">ADD TRANSACTION</h3>

            <div className="flex flex-row justify-evenly">
            <input
            type="number"
            placeholder="Amount..."
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            className={`bg-slate-700 font-medium py-1 px-2 w-sm rounded-md placeholder:text-cyan-100 ${typeColor}`}
            />

            <select value={type} onChange={(e)=>setType(e.target.value)}
            className={`bg-slate-700 py-1 px-2 rounded-md font-semibold ${typeColor}`}
            >
                <option value="expense" className="text-red-500 font-semibold">Expense</option>
                <option value="income" className="text-green-400 font-semibold">Income</option>
            </select>

            <input 
            type="text"
            placeholder="Category..."
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className={`bg-slate-700 py-1 px-2 rounded-md font-semibold ${typeColor} placeholder:text-cyan-100`}
            />

            <input
            placeholder="Date..."
            type="text"
            onFocus={(e)=>e.target.type="date"}
            onBlur={(e)=>e.target.type="text"}
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            className="bg-slate-700 py-1 px-2 rounded-md font-semibold placeholder:text-cyan-100 text-cyan-300"
            />

            </div>

            <button type="submit"
            className="bg-cyan-600 cursor-pointer hover:bg-cyan-700 active:bg-cyan-800 text-white font-bold text-md py-2.5 px-7 rounded-3xl mt-3 shadow-sm hover:shadow-md active:shadow-sm transition-all duration-200 ease-out border border-cyan-700 hover:border-cyan-800"
            >Add</button>
        </form>
    )
}