import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/RBG/:R/:G/:B" component={Header} />
      </Switch>
    </main>
  );
}

export default App;
