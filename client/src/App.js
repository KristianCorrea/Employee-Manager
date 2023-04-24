import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Routes>
                <Route path="/" exact element = {<ListEmployeeComponent/>} />
                <Route path="/employees" element = {<ListEmployeeComponent/>} />
                <Route path="/add-employee" element = {<CreateEmployeeComponent/>} />
              </Routes>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
