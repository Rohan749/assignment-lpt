import './App.css';
import Body from './Components1/Body';
import Desktop from './Component2/Desktop';
import NavBar from './Components1/NavBar';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
      <Route path="/assignment-lpt" element={<><NavBar />
      <Body /></>}/>
      <Route path="assignment-lpt/applications" element={<Desktop />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
