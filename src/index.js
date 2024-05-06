import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
// import App1 from '/garvitasapp3.0/components/App.js'
// import Main from './components/secondPage/mmain'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
        {/* <SearchProvider> */}
            <App />
        {/* </SearchProvider> */}
    </React.StrictMode>
);