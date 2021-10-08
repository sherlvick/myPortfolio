import './App.css';

import React, { Suspense, lazy } from 'react';

import {Route, Switch} from 'react-router-dom';

// import layout hoc
import Layout from './hoc/Layout';

// import views
const HomePage = lazy(() => import('./views/HomePage/HomePage'));
// import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
        </Suspense>
      </Layout>
  );
}

export default App;
