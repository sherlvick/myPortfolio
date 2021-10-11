import './App.css';

import React, { Suspense, lazy } from 'react';

import { Route, Switch } from 'react-router-dom';

// import layout hoc
import Layout from './hoc/Layout';
// import HomePage from './views/HomePage/HomePage';
// import ContactPage from "./views/Contact/Contact";
// import views
const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const ContactPage = lazy(() => import('./views/Contact/Contact'));
const ResumePage = lazy(() => import('./views/Resume/Resume'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/resume" component={ResumePage} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
