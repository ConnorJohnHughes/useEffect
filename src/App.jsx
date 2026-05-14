import { useState, useEffect } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  const [allPokemon, setAllPokemon] = useState([])

  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
        setAllPokemon(data.results)
      })
  }, [])

  useEffect(() => {
    if(allPokemon.length === 0) return

    const pokeMapper = allPokemon.map(pokemon => {
      return fetch(pokemon.url)
      .then(res => res.json())
    })  

    Promise.all(pokeMapper)
      .then(data => {
        console.log(data)
        setPokemonData(data)
      })       
  },[allPokemon])

  return (
    <div className='app-container'>
      <Header />
      <Body 
        allPokemon={allPokemon}
        pokemonData={pokemonData}
      />
      <Footer />
    </div>
  )
}

export default App
