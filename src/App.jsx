import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { Destino } from './pages/Destinos';
import { ShoppingCart } from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/destino" exact component={Destino} />
        <Route path="/carrinhodecompras" exact component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
