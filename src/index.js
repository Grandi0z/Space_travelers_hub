import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './redux/features/store';
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

/*eslint-disable*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
);
