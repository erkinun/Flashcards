import Flashcard from '../Flashcard/Flashcard'
import './Trainer.css'

const Trainer = ({ questions = [] }) => (
  <div className='trainer'>
    <h1>trainer</h1>
    <Flashcard question={'What is the meaning of life?'} answer={42} />
  </div>
)

export default Trainer
