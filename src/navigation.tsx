import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Landing, Login } from './pages'

interface Props {
    
}

const Navigation = (props: Props) => {
    return (
        <BrowserRouter>
            <Switch>  
                <Route exact path='/' component={Landing}></Route>
                <Route path='/login' component={Login}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;
