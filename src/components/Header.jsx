import '../components/Header.css'

export default function Header(props) {
  return (
    <header className='header'>
      <h1 className='header-h1'>useEffect PokeDex</h1>
      <input 
        type="text"
        value={props.searchPokemon} 
        onChange={(e) => {
          props.setSearchPokemon(e.target.value)
          props.setCount(0)
          }
        }  
      />
    </header>
  )
}