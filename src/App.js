
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Solution from './components/solution';
import ThankYou from './components/thanks';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route path="/solution" component={Solution} /> 
        <Route path="/thanks" component={ThankYou} />
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
