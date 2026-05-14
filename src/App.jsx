import { useState, useEffect } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
        setAllPokemon(data.results)
      })
  }, [])

  return (
    <div className='app-container'>
      <Header />
      <Body allPokemon={allPokemon}/>
      <Footer />
    </div>
  )
}

export default App
