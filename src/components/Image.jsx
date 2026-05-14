import '../components/Image.css'

export default function Image({pokemonImage}) {
  // console.log(pokemonImage)
  return (
    <div className='image-component'>
      <img src={pokemonImage?.sprites?.front_default} alt="image of Pokemon" />
    </div>
  )
}