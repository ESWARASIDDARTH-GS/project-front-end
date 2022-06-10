import React from 'react'
import DataPage from './components/DataPage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
  <div className="App" style={{height:"100vh",width:"100%"}}>
    <Navbar/>
    <Routes>
      <Route index element={<HomePage/>}>
      </Route>
      <Route path='super-market' element={<DataPage path='super-market'/>}>
      </Route>
      <Route path='restuarant' element={<DataPage path='restuarant'/>}>
      </Route>
      <Route path='mobile-store' element={<DataPage path='mobile-store'/>}>
      </Route>
    </Routes>
  </div>
    </Router>

  );
}

export default App;
