import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState()  
  const [email, setEmail] = useState()
  const handleState = event => {
    event.preventDefault();
    console.log(email,name)
  }
  return (
    <>
      <div>
        <form onSubmit={handleState}>
          <br />
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='text-2xl italic' placeholder='Coloque seu nome'/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='text-2xl italic' placeholder='Coloque seu gmail'/>
          <button type='submit'>Enviar</button>
        </form>
        <br />
        <h1 id='titulo' className='font-sans text-pink-950 text-lg not-italic underline decoration-4'>Seu novo nome é "{name}"</h1>
        <h1 id='titulo' className='font-sans text-pink-950 text-lg not-italic underline decoration-4'>Seu novo Email é "{email}"</h1>
      </div>
    </>
  )
}

export default App
