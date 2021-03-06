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
import { TransferPage } from './pages/TransferPage';
import { SolicitarOrcamento } from './pages/SolicitarOrcamento';
import { Thanks } from './pages/Thanks';

import { AdminPage } from './pages/BackOffice/AdminPage';
import { EditDestination } from './pages/BackOffice/EditDestination';
import { ClientesAdminPage } from './pages/BackOffice/ClientesAdminPage';
import { EditClient } from './pages/BackOffice/EditClient';
import { TestimonyAdminPage } from './pages/BackOffice/TestimonyAdminPage';
import { EditTestimony } from './pages/BackOffice/EditTestimony';

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
        <Route path="/transfer" exact component={TransferPage} />
        <Route path="/solicitarorcamento" exact component={SolicitarOrcamento} />
        <Route path="/confimacao" exact component={Thanks} />

        <Route path="/login" exact component={Login} />
        <Route path="/admin/home/auth=:token" exact component={AdminPage} />
        <Route path="/editardestino/:id/auth=:token" exact component={EditDestination} />
        <Route path="/admin/clientes/auth=:token" exact component={ClientesAdminPage} />
        <Route path="/admin/clientes/editarcliente/:id/auth=:token" exact component={EditClient} />
        <Route path="/admin/depoimentos/auth=:token" exact component={TestimonyAdminPage} />
        <Route path="/admin/depoimentos/editardepoimento/:id/auth=:token" exact component={EditTestimony} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
