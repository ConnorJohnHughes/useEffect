import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import Item from './components/Item'
import Image from './components/Image'
import StatsList from './components/StatsList'

function App() {


  return (
    <div className='app-container'>
      <Header className="header" />
      <Body />
      <Item />
      <Image />
      <StatsList />
      <Footer />
    </div>
  )
}

export default App
