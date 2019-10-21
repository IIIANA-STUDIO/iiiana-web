import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import HelmetProvider from "react-navi-helmet";
import {Router, View} from "react-navi";
import Routes from "./Routes/Routes";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router routes={Routes}>
        <Suspense fallback={null}>
          <View/>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
