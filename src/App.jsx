import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { Destino } from './pages/Destinos';
import { ShoppingCart } from './pages/ShoppingCart';
import { Pacotes } from './pages/Pacotes';
import { Pacote } from './pages/Pacote';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/destino" exact component={Destino} />
        <Route path="/carrinhodecompras" exact component={ShoppingCart} />
        <Route path="/pacotes" exact component={Pacotes} />
        <Route path="/pacote" exact component={Pacote} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
