import React from 'react';
import ReactDOM from 'react-dom/client';
import { SearchProvider } from './components/searchContext';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
        <SearchProvider>
            <App />
        </SearchProvider>
    </React.StrictMode>
);