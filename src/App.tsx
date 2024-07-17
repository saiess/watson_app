// import { useState } from 'react'
import './App.css'
import Outfits from './components/Outfits'
import WatsonAssistantWidget from './components/WatsonAssistant'

function App() {

  return (
    <>
    <h1>Recommended Outfits</h1>
      <p className="read-the-docs">
        Please use watson chatBot for recommendations
      </p>
      <Outfits/>
      <WatsonAssistantWidget />
    </>
  )
}

export default App
