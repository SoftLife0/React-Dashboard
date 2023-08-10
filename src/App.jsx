import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Year from './Year'
import Csv from './Csv';
import Newfom from './Newfom';



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    console.log("Triggered sidebar function")
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/year" component={Year} />
            <Route path="/csv" component={Csv} />
            <Route path="/new" component={Newfom} />
          </Switch>
        </main>
      </div>
    </Router>  
  )
}

export default App
