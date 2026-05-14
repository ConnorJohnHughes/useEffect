import '../components/Body.css'
import Item from './Item'

export default function Body(props){

    return(
    <div className="body-container">
        <h1 className='body-h1'></h1>
        <div >
                <Item pokemonURL={props.allPokemon[0]?.url} pokemonName={props.allPokemon[0]?.name}/>
        </div>

    </div>  
    )
}