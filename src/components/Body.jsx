import '../components/Body.css'
import Item from './Item'

export default function Body(props){
    console.log(props.pokemonData)
    return(
    <div className="body-container">
        <h1 className='body-h1'></h1>
        <div >
            {props.pokemonData.map(pokemon => (
                <Item 
                // pokemonName={props.allPokemon[0]?.name}
                key={pokemon.id}
                pokemonData={pokemon}
            />
            ))}
        </div>
    </div>  
    )
}