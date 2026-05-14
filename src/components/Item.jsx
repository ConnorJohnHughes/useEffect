import '../components/Item.css'
import Image from '../components/Image'
import StatsList from '../components/StatsList'

export default function Item({pokemonData}) {
  return (
    <div className='item-component'>
      <h1>{pokemonData.name}</h1>
      <Image pokemonImage={pokemonData}/>
      <StatsList />
    </div>
  )
}