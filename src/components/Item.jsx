import '../components/Item.css'
import Image from '../components/Image'
import StatsList from '../components/StatsList'

export default function Item({pokemonData}) {
  return (
    <div className='item-component'>
      <h1 className='pokemon-name'>{pokemonData.name}</h1>
      <Image pokemonImage={pokemonData}/>
      <StatsList pokemonData={pokemonData}/>
    </div>
  )
}