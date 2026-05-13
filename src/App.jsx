import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import Item from './components/Item'

function App() {


  return (
    <div className='app-container'>
      <Header className="header" />
      <Body />
      <Item />
      <Footer />
    </div>
  )
}

export default App
