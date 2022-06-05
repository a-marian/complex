import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-domc';
import OtherPage from "./OtherPage";
import Fibo from "./Fibo";

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" component {Fibo} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>

  );
}

export default App;
