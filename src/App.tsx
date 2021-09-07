import React from 'react';
import {Route, Switch} from "react-router-dom"
import Home from "./pages/home";
import Admin from "./pages/admin";
import EmployeesList from "./pages/employees";


const App = () => {


    return (

        <Switch>
            <Route exact path='/' component={Home}/>

            <Route exact path='/admin' component={Admin}/>
            <Route exact path='/employees' component={EmployeesList}/>


        </Switch>
    );
}


export default App;
