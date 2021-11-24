import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { ShoppingCart } from './pages/ShoppingCart';
import { Destinos } from './pages/Destinos';
import { Destino } from './pages/Destino';
import { PaymentPage } from './pages/PaymentPage';
import { ClienteInfo } from './pages/ClienteInfo';
import { RegistrarDepoimento } from './pages/RegistrarDepoimento';
import { Login } from './pages/Login';

import { AdminPage } from './pages/BackOffice/AdminPage';
import { EditDestination } from './pages/BackOffice/EditDestination';

import { ClientesAdminPage } from './pages/BackOffice/ClientesAdminPage';
import { EditClient } from './pages/BackOffice/EditClient';

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
        <Route path="/escreverdepoimento" exact component={RegistrarDepoimento} />
        <Route path="/login" exact component={Login} />

        <Route path="/admin/home" exact component={AdminPage} />
        <Route path="/editardestino/:id" exact component={EditDestination} />
        <Route path="/admin/clientes" exact component={ClientesAdminPage} />
        <Route path="/admin/clientes/editarcliente/:id" exact component={EditClient} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
