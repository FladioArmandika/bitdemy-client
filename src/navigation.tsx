import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ROUTE_AUTH_LOGIN, ROUTE_HOME, ROUTE_LANDING } from './constants/route'
import { Home, Landing, Login } from './pages'

interface Props {
    
}

const Navigation = (props: Props) => {
    return (
        <BrowserRouter>
            <Switch>  
                <Route exact path={ROUTE_LANDING} component={Landing}></Route>
                <Route path={ROUTE_HOME} component={Home}></Route>
                <Route path={ROUTE_AUTH_LOGIN} component={Login}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;
