import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import configureStore from "./redux/store/configureStore";
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';
import 'toastr/build/toastr.css';
import { LocaleProvider } from 'antd';
import sp from 'antd/lib/locale-provider/es_ES';

export const store = configureStore();

const WithProvider = () => (
  <BrowserRouter>
    <LocaleProvider locale={sp}>
      <App/>
    </LocaleProvider>
  </BrowserRouter>
);

const ReduxProvider = () => (
  <Provider store={store}>
    <WithProvider/>
  </Provider>
);

ReactDOM.render(<ReduxProvider />, document.getElementById('root'));
registerServiceWorker();
