import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Checkout from "../containers/Checkout";
import Home from "../containers/Home";
import Information from "../containers/Information";
import NotFound from "../containers/NotFound";
import Payment from "../containers/Payment";
import Sucess from "../containers/Sucess";
import AppContext from "../context/AppContext";
import UseInicialState from "../hooks/UseInicialState";

const App = () => {
  const inicialState = UseInicialState();
  return (
    <AppContext.Provider value={inicialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/sucess" component={Sucess} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
