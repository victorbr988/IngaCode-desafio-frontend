import './styles/global.css'
import { Pagination } from './routes/Pagination'
import { ContextApp } from './context/ContextConsumer'

function App() {
  return (
    <div className='min-h-screen'>
      <ContextApp>
        <Pagination />
      </ContextApp>
    </div>
  )
}

export default App
