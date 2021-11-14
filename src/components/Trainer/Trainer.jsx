import Flashcard from '../Flashcard/Flashcard'
import './Trainer.css'

const Trainer = ({ questions = [] }) => (
  <div className='trainer'>
    <h1>trainer</h1>
    <Flashcard {...questions[0]} />
  </div>
)

export default Trainer
