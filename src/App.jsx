import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { LitoralNorte } from './pages/Destinos/LitoralNorte';
import { ShoppingCart } from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/litoralnorte" exact component={LitoralNorte} />
        <Route path="/carrinhodecompras" exact component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
