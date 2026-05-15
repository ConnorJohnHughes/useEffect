import '../components/Body.css'
import Item from './Item'

export default function Body(props){
    

    console.log(props.pokemonData)


    
    return(
    <div className="body-container">
        <h1 className='body-h1'></h1>
        <div >
            {props.pokemonData.map((pokemon, index) => {
                if(index === props.count){
                    return(
                        <Item 
                            key={pokemon.id}
                            pokemonData={pokemon}
                        />
                    )
                }

                return null
            })}
        </div>

    </div>  
    )
}