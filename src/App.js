import './styles/App.css';
import Shorten from './components/shorten/Shorten'; 
import Features from './components/features/Features'; 
function App() {
  return (
    <div className="App">
        <Shorten />
    <div className='AppContainer'>
        <Features />
    </div>
  
    </div>
  );
}

export default App;
