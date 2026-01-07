import './App.css'
import { motion } from 'motion/react'

function App() {

  return (
    <>
      <motion.dev initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <h1>Hello</h1>
      </motion.dev>
    </>
  )
}

export default App
