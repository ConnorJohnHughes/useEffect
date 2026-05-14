import '../components/Item.css'
import Image from '../components/Image'
import StatsList from '../components/StatsList'
export default function Item({pokemonName, pokemonData}) {

  return (
    <div className='item-component'>
      <h1>{pokemonName}</h1>
      <Image pokemonImage={pokemonData}/>
      <StatsList />
    </div>
  )
}