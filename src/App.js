import './App.css'
import Trainer from './components/Trainer/Trainer'
import questions from './questions'

function App() {
  return (
    <div className='App'>
      {/* TODO load a series of questions */}
      {/* TODO design a progression thru questions */}
      {/* TODO counters for right and wrong answers */}
      {/* TODO basically like https://www.cram.com/flashcards/cultural-anthropology-chapter-1-2504264 */}
      <Trainer questions={questions} />
    </div>
  )
}

export default App
