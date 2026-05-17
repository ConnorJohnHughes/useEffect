import { useState, useEffect } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  const [allPokemon, setAllPokemon] = useState([])

  const [pokemonData, setPokemonData] = useState([])
  
  const [count, setCount] = useState(0)

  const [searchPokemon, setSearchPokemon] = useState("")

  function nextPokemon(){
    setCount(prevCount => prevCount + 1)
  }
  function prevPokemon(){
    if(!count <= 0){
      setCount(prevCount => prevCount - 1)
    }
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
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
        // console.log(data)
        setPokemonData(data)
      })       
  },[allPokemon])

  const filterPokemon = pokemonData.filter(pokemon => pokemon.name.includes(searchPokemon))

  return (
    <div className='app-container'>
      <Header 
        searchPokemon={searchPokemon}
        setSearchPokemon={setSearchPokemon}
        setCount={setCount}
      />
      <Body 
        allPokemon={allPokemon}
        pokemonData={pokemonData}
        count={count}
        filterPokemon={filterPokemon}

      />
      <Footer 
        nextPokemon={nextPokemon}
        prevPokemon={prevPokemon}
      />
    </div>
  )
}

export default App
