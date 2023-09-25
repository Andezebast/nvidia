import React from 'react';
import './App.scss';
import {routes} from "./services/routes";
import ErrorPage from './page/Error/ErrorPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
/*-----------------------------------------------------------*/
import Header from './component/Header/Header';
import Footer from "./component/Footer/Footer";
/*-----------------------------------------------------------*/
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header/>
                <div className='main'>
                    <Routes>
                        {routes.map(route => (
                            <Route key={route.key} Component={route.component} path={route.path}/>
                        ))}
                        <Route path="*" Component={ErrorPage}/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
