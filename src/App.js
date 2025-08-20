import React,{Component} from 'react';
import Home from './components/Home';
import AboutUs from './components/About-us';
import Navbar from './components/navbar';
import Work from './components/Work';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Solution from './components/Solution';
import './App.css'
class App extends Component{
  render(){
    return (
      <div>
<Navbar/>

    <Home />
 <AboutUs />
    <Work />
    <Service />
    <Solution />
    <Contact />
    <Footer />
    </div>);
  }
}
export default App;
