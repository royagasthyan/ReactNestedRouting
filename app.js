import React from 'react'
import { render } from 'react-dom'
import {Link, Route, Router, hashHistory} from 'react-router';
 
const App = (props) => {
    return (
        <div>
            <h2>{'TutsPlus - Welcome to React Nested Routing App'}</h2>
            <Menu />
            {props.children}
        </div>
    );
};

const Home = () => {
    return(
        <div>
            <h3>{'Welcome Home !!'}</h3>
        </div>
         
    );
};

const View1 = () => {
    return(
        <h3>{'Welcome to View1'}</h3>
    );
};
 
const View2 = () => {
    return(
        <h3>{'Welcome to View2'}</h3>
    );
};

const Menu = () => {
    return(
        <section>
            
            <ul>
                <li>
                	 <Link to="/home">{'Home'}</Link>
                </li>
                <li>
                    <Link to="/view1">{'View1'}</Link>
                </li>
                <li>
                    <Link to="/view2">{'View2'}</Link>
                </li>
            </ul>
        </section>
    )
};
 

render(
    <Router history={hashHistory}>
        <Route component={App} path="/">
            <Route component={Home} path="/home"></Route>
            <Route component={View1} path="/view1"></Route>
            <Route component={View2} path="/view2"></Route>
        </Route>
    </Router>,
document.getElementById('app'));
