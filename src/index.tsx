import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {QueryClientProvider} from "react-query";
import queryClient from "./services/queryClient";
/*--------------------Store--------------------*/
import {Provider} from "react-redux";
import {setupStore} from './store/store';
const store = setupStore();
/*--------------------Store--------------------*/
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
