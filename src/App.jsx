import { useState } from 'react'
import './css/App.css'
import { Container, fetchAI } from './components/export'
import ReactTypingEffect from 'react-typing-effect';


function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = async () => {
    setInput('')
    setIsLoading(true)
    setResult(null)
    const result = await fetchAI(input);
    setResult(result);
    setIsLoading(false);
  }



  return (
    <div className="App">
      <h1>Ask anything to GE-knews</h1>
      <p>COHERE API all right reserved © DEMO</p>
      <Container re={result} isLoading={isLoading} />

      <div className='App__input'>

        <div className='App__input--submit'>
          <ReactTypingEffect
            speed={60}
            eraseSpeed={30}
            text={["please write the questions in English or the AI will generate random answers, the answers are only in English, AI database may not be updated to nowadays",
              "write 30 test questions regarding bacterium ",
              "generate 10 pet names",
              "tell me 5 places to visit in Spain",
              "generate a description of farm product called REDF",
              "if you type more details of what you want the more precise the AI will be :)",
              "What is art as concept",
            "Summarise Barack Obama's biography",
          "summarise this text <text> " ]}
            eraseDelay={6000}
            cursorClassName="cursor"
            className='textarea'
            displayTextRenderer={(text) => {
              return (
                <textarea type="text" onChange={handleChange} value={input} placeholder={text} />
              )
            }} />
          <button onClick={handleClick} client="visible" >submit</button>

        </div>

      </div>
    </div>
  )
}

export default App
