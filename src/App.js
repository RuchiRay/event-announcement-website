
import Home from './components/Home';
import Speaker from './components/Speaker';
import Timing from './components/Timing';
import { Features } from './components/Features'
import { What } from './components/What'

function App() {
  return (
    <div className="App">
      <Home/>
      <Timing/>
      <Speaker/>
      <Features/>
      <What/>
    </div>
  );
}

export default App;
