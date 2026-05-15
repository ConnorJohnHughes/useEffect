import '../components/Footer.css'

export default function Footer(props) {
  return (
    <div className='footer'>
          <button className='prev-btn' onClick={props.prevPokemon} >PREV</button>
        <button className='next-btn' onClick={props.nextPokemon}>NEXT</button>
    </div>
  )
}