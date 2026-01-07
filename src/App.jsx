import './App.css'
import { motion } from 'motion/react'
import AnimatedButton from './components/AnimatedButton'
import { FeaturesList } from './components/FeaturesList'
import { DraggableCard } from './components/DraggableCard'
import { DismissableAlert } from './components/DismissableAlert'
import { StepSwitcher } from './components/StepSwitcher'
import { CollapsibleList } from './components/CollapsibleList'

function App() {

  return (
    <>
      <CollapsibleList />
    </>
  )
}

export default App
