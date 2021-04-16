
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Solution from './components/solution';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route path="/solution" component={Solution} />
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
