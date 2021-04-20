import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { color } from './constants/colors'
import { ROUTE_AUTH_LOGIN, ROUTE_COURSE_DETAIL, ROUTE_HOME, ROUTE_LANDING } from './constants/route'
import { CourseDetail, Home, Landing, Login } from './pages'
import Logo from './assets/logo_dark.svg'
import { Text } from './components'

interface Props {
    
}

const Navigation = (props: Props) => {
    return (
        <BrowserRouter>
            <div className="absolute left-0 top-0 w-full px-4 sm:px-6 lg:px-20 z-50" style={{color: 'white'}}>
                <div className="">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex items-center w-full justify-between lg:w-0 lg:flex-1">
                            <Link to={ROUTE_LANDING} className="">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10" src={Logo} alt=""/>
                            </Link>
                            <Link to={ROUTE_AUTH_LOGIN}>
                                <Text bold>Login</Text>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-10 relative">
                <Switch>  
                    <Route exact path={ROUTE_LANDING} component={Landing}></Route>
                    <Route path={ROUTE_HOME} component={Home}></Route>
                    <Route path={ROUTE_COURSE_DETAIL+":courseId"} component={CourseDetail}></Route>
                    <Route path={ROUTE_AUTH_LOGIN} component={Login}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Navigation;
