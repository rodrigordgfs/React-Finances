
import Header from '../../Components/Header'
import Cards from '../../Components/Cards'
import styles from './index.module.css'
import Options from '../../Components/Options'
import Transactions from '../../Components/Transactions'

function App() {
  return (
    <div className="App bg-zinc-900">
      <Header />
      <Cards />
      <Options />
      <Transactions />
    </div>
  )
}

export default App
