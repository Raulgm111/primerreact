import logo from './logo.svg';
import './App.css';

import Metodos from './components/Metodos';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <Metodos/>
      <Saludo nombre="Ana" edad="25"/>
    </div>
  );
}

export default App;
