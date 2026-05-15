import '../components/StatsList.css'

export default function StatsList({pokemonData}) {
  console.log(pokemonData.height)

  return (
    <div>
      <div className='statsList'>
        <h1>Hp: {pokemonData.stats[0].base_stat}</h1>
        <h1>Attack: {pokemonData.stats[1].base_stat} </h1>
        <h1>Defense: {pokemonData.stats[2].base_stat} </h1>
        
      </div>
      <div className='heightWeight'>
        <h2>{pokemonData.height} </h2>
        <h2>{pokemonData.weight} </h2>
      </div>
    </div>
  )
}