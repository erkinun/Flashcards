import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  return (
    <div className='App'>
      <Flashcard question={'What is the meaning of life?'} answer={42} />
    </div>
  )
}

export default App
