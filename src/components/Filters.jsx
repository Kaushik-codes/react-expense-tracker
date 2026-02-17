import { useContext } from "react"
import { TransactionContext } from "../context/TransactionContext"

export default function Filters (){
    const {filter,setFilter,searchTerm, setSearchTerm} = useContext(TransactionContext);
    return(
        <div className="mt-8 flex flex-row w-6xl justify-around">
            <input type='text' placeholder="Search by category..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
            className="bg-slate-700 py-2.5 px-5 rounded-3xl border border-amber-400 font-semibold placeholder:text-cyan-100 w-[50%] duration-300 ease-in-out hover:-translate-0.5"
            />
            {/* all button */}
            <button
            className="bg-cyan-400 rounded-3xl w-25 hover:bg-cyan-600 font-semibold text-lg cursor-pointer duration-300 ease-in-out hover:-translate-0.5"
            onClick={()=>setFilter("all")}
            disabled={filter==="all"}
            >
                All
            </button>
            {/* income button */}
            <button
             className="bg-green-500 rounded-3xl w-25 hover:bg-green-700 font-semibold text-lg cursor-pointer duration-300 ease-in-out hover:-translate-0.5"
            onClick={()=>setFilter("income")}
            disabled={filter==="income"}
            >
                Income
            </button>
            {/* expense button */}
            <button
             className="bg-red-500 rounded-3xl w-25 hover:bg-red-700 font-semibold text-lg cursor-pointer duration-300 ease-in-out hover:-translate-0.5"
            onClick={()=>setFilter("expense")}
            disabled={filter==="expense"}
            >
                Expense
            </button>
        </div>
    )
}