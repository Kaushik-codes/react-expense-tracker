import './App.css'
import { ToastContainer } from 'react-toastify';
import BalanceCard from './components/BalanceCard'
import Filters from './components/Filters'
import Header from './components/Header'
import Summary from './components/Summary'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'



function App() {
  return (
    <div>
      <ToastContainer />
      <Header/>
      <Summary/>
      <BalanceCard/>
      <AddTransaction/>
      <Filters/>
      <TransactionList/>
    </div>
  )
}

export default App
