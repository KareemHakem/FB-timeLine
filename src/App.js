import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'



function App() {
  return (
    <div  style={{width: '100%'}}>
      <Navbar />
      {/* Switch papa bta3 al route  */}
      <Switch> 
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;


