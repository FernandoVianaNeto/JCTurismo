import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { Destino } from './pages/Destinos';
import { ShoppingCart } from './pages/ShoppingCart';
import { Pacotes } from './pages/Pacotes';
import { Pacote } from './pages/Pacote';
import { PaymentPage } from './pages/PaymentPage';
import { Transfer } from './pages/Transfer';
import { CityTour } from './pages/CityTour';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/destino" exact component={Destino} />
        <Route path="/carrinhodecompras" exact component={ShoppingCart} />
        <Route path="/pacotes" exact component={Pacotes} />
        <Route path="/pacote" exact component={Pacote} />
        <Route path="/pagamento" exact component={PaymentPage} />
        <Route path="/transfer" exact component={Transfer} />
        <Route path="/citytour" exact component={CityTour} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
