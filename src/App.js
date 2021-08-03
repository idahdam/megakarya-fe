import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
