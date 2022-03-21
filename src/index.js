import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import { MoralisProvider } from "react-moralis";



const serverUrl = "https://isb8pis0qh1m.usemoralis.com:2053/server";
const appId = "a9gDoSpFcK9UADbIQGrnsIRdxYmmOZw6M28Wvu8T";



ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);

