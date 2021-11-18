import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { ShoppingCart } from './pages/ShoppingCart';
import { Destinos } from './pages/Destinos';
import { Destino } from './pages/Destino';
import { PaymentPage } from './pages/PaymentPage';
import { ClienteInfo } from './pages/ClienteInfo';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/destino/:id" exact component={Destino} />
        <Route path="/destinos" exact component={Destinos} />
        <Route path="/carrinhodecompras" exact component={ShoppingCart} />
        <Route path="/clienteinfo" exact component={ClienteInfo} />
        <Route path="/pagamento" exact component={PaymentPage} />
        <Route path="/adminpage/admin" exact component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
