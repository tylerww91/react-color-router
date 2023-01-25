import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import NotFound from './components/NotFound/NotFound.js';
import RGB from './components/RGB/RGB';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/rgb/:r/:g/:b" component={RGB} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
