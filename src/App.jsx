import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'
import axios  from "axios"

function App() {
  const [location, setLocation] = useState()
  const [search, setSearch] = useState("")
  useEffect(()=>{
    let randomLocation
   
   
    if(search===""){
       randomLocation=Math.floor(Math.random()*125)+1
      
    }
    else{

      randomLocation=search
      
    }
    
   const URL=`https://rickandmortyapi.com/api/location/${randomLocation}`
    axios.get(URL)
    .then(res=>setLocation(res.data))
    .catch(err=>console.log(err))


  },[search])
  

const handleSearch=(e)=>{
  e.preventDefault()
    setSearch(e.target.search.value)
    console.log(e.target.search.value)

}

  return (
    <div className="App">
      <div className='rectangle'>
      
      </div>
      <header className='header'>
      <h1 className='title'>Rick and Morty</h1>
      <form onSubmit={handleSearch}>
        <input type="number" id ="search" className="form" placeholder='write a number from 1 to 126' min="0" max="126" autoFocus/>
        <button>search by number </button>
      </form>
      </header>
        
      <div className='location'>
      <LocationInfo location={location}/>
      </div>
        
      <div className='residents'>

          {


              location?.residents.map(url=>(


                
                <CardResident 
                key={url}
                url={url}/>
                )
              )
          }
      </div>
    </div>
  )
}

export default App
