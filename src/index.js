import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/Register';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Register from './components/Register';
import Query from './components/Query';

ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register-product' element={<Register />}/>
            <Route path='/query' element={<Query />}/>
        </Routes>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
