import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    
      <Router>
        <div className="main">
          <h2 className="main-header">React Todo Operations</h2>
          <div>
            <Routes>
              <Route exact path='/' element={<Create/>} />
            </Routes>
          </div>
          <div style={{ marginTop: 20 }}>
            <Routes>
              <Route exact path='/read' element={<Read/>} />
            </Routes>
          </div>
            <Routes>
              <Route exact path='/update' element={<Update/>} />
            </Routes>
        </div>
      </Router>
   
  );
}

export default App;
