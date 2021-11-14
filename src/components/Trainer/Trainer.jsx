import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Flashcard from '../Flashcard/Flashcard'
import './Trainer.css'

/* Randomize array in-place using Durstenfeld shuffle algorithm */
/* Taken from: https://stackoverflow.com/a/12646864/219586 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return Array.from(array)
}

const Trainer = ({ questions = [] }) => {
  const [index, setIndex] = useState(0)
  const [qs, setQs] = useState(questions)

  useEffect(() => {
    setIndex(0)
  }, [qs])

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(0)
    }
  }
  const next = () => {
    if (index < qs.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(qs.length - 1)
    }
  }
  const shuffle = () => {
    setQs(shuffleArray(qs))
  }
  return (
    <div className='trainer'>
      <h1>Trainer</h1>
      <div className='panel'>
        <div>
          Progress: {index + 1} of {qs.length}
        </div>
      </div>
      <Flashcard {...qs[index]} />
      <div className='buttons'>
        <Button variant='outline-secondary' onClick={prev}>
          Previous
        </Button>
        <Button variant='outline-primary' onClick={next}>
          Next
        </Button>
        <Button variant='outline-warning' onClick={shuffle}>
          Shuffle
        </Button>
      </div>
    </div>
  )
}

export default Trainer
