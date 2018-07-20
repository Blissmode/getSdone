import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Form from './components/form';
import './styles/overall.css';


ReactDOM.render(
    <div>
        <App />
        <Form />
    </div>,
    document.getElementById('root')
);