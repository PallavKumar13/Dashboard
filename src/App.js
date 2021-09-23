import './App.css';
import Menu from './Componants/Menu';
import Dashboard from './Componants/Dashboard';

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item item1"><Menu /></div>
      <div className="grid-item item2"> <Dashboard /></div>
    </div>
  );
}

export default App;
