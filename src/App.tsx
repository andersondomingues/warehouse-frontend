import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import { StoragePage } from './pages/StoragePage';
import { HomePage } from './pages/HomePage';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={HomePage}
        />
        <Route
          path="/storage"
          exact
          component={StoragePage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
