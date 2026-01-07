import './App.css'
import { motion } from 'motion/react'
import AnimatedButton from './components/AnimatedButton'

function App() {

  return (
    <>
      <AnimatedButton>Get Started</AnimatedButton>
      <AnimatedButton damping={0}>Second</AnimatedButton>
    </>
  )
}

export default App
