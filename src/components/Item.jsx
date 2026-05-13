import '../components/Item.css'
import Image from '../components/Image'
import StatsList from '../components/StatsList'
import { useEffect, useState } from 'react'

export default function Item({pokemonURL, pokemonName}) {

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if(!pokemonURL) return
    
    fetch(pokemonURL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPokemonData(data)
    })
  },[pokemonURL])

  return (
    <div className='item-component'>
      <h1>{pokemonName}</h1>
      <Image pokemonImage={pokemonData}/>
      <StatsList />
    </div>
    
  )
}