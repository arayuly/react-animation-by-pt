import './App.css'
import { motion } from 'motion/react'
import AnimatedButton from './components/AnimatedButton'
import { FeaturesList } from './components/FeaturesList'
import { DraggableCard } from './components/DraggableCard'
import { DismissableAlert } from './components/DismissableAlert'
import { StepSwitcher } from './components/StepSwitcher'

function App() {

  return (
    <>
      <StepSwitcher />
    </>
  )
}

export default App
