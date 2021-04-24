import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { color } from './constants/colors'
import { ROUTE_AUTH_LOGIN, ROUTE_AUTH_LOGIN_SUCCESS, ROUTE_COURSE_DETAIL, ROUTE_HOME, ROUTE_LANDING } from './constants/route'
import { CourseDetail, Home, Landing, Login, LoginSuccess, Page404 } from './pages'
import Logo from './assets/logo_dark.svg'
import { ProtectedRoute, Text, Navbar } from './components'

interface Props {
     
} 

const Navigation = (props: Props) => {
    return (
        <BrowserRouter>
            <Navbar />    
            <Switch> 
                <Route exact path={ROUTE_LANDING} component={Landing}></Route>
                <Route path={ROUTE_HOME} component={Home}></Route>
                {/* <ProtectedRoute exact path={ROUTE_HOME} component={Home}/> */}
                <Route path={ROUTE_COURSE_DETAIL+":courseId"} component={CourseDetail}></Route>
                <Route exact path={ROUTE_AUTH_LOGIN} component={Login}></Route>
                <Route path={ROUTE_AUTH_LOGIN_SUCCESS} component={LoginSuccess}></Route>
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;
