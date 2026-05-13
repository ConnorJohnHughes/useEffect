import { useState, useEffect } from 'react'
import '../components/Body.css'
import Item from './Item'

export default function Body(){

    const [allPokemon, setAllPokemon] = useState([])
  

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setAllPokemon(data.results)
        })
    }, [])



    return(
    <div className="body-container">
        <h1 className='body-h1'></h1>
        <div >
                <Item pokemonURL={allPokemon[0]?.url} pokemonName={allPokemon[0]?.name}/>
          
            

        </div>

    </div>  
    )
}