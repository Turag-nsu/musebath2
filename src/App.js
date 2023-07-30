// import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HeroPart from './components/HeroPart/HeroPart';
import WhyChoosePart from './components/WhyChoosePart/WhyChoosePart';

function App() {
  
  return (
    <div className="App">
      <CustomNavbar />
      <HeroPart />
      <WhyChoosePart />
    </div>
  );
}

export default App;
