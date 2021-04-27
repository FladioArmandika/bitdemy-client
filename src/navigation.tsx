import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { ROUTE_AUTH_LOGIN, ROUTE_AUTH_LOGIN_SUCCESS, ROUTE_COURSE_DETAIL, ROUTE_HOME, ROUTE_LANDING } from './constants/route'
import { CourseDetail, Home, Landing, Login, LoginSuccess, Page404 } from './pages'
import { ProtectedRoute, Text, Navbar } from './components'
import AuthService from './services/auth'
import { AuthContext } from './providers/auth/indext'

interface Props {
     
} 

const Navigation = (props: Props) => {

    const authService: AuthService = new AuthService();
    const { setUserLoggedIn } = useContext(AuthContext);

    const [authChecked, setAuthChecked] = useState(false)

    useEffect(() => {
        setAuthChecked(false)
        authService.verifyUser()
            .then((data) => {
                if (!data) {
                    console.log("g ada")
                    setUserLoggedIn(false)
                } else {
                    console.log("ada")
                    setUserLoggedIn(true)
                }
                setAuthChecked(true)
            })
    }, [])
    
    return (
        <>
            {
                authChecked && 
                <BrowserRouter>
                    <Navbar />    
                    <Switch> 
                        <Route exact path={ROUTE_LANDING} component={Landing}></Route>
                        {/* <Route path={ROUTE_HOME} component={Home}></Route> */}
                        <ProtectedRoute exact path={ROUTE_HOME} component={Home}/>
                        <Route path={ROUTE_COURSE_DETAIL+":courseId"} component={CourseDetail}></Route>
                        <Route exact path={ROUTE_AUTH_LOGIN} component={Login}></Route>
                        <Route path={ROUTE_AUTH_LOGIN_SUCCESS} component={LoginSuccess}></Route>
                        <Route component={Page404} />
                    </Switch>
                </BrowserRouter>
            }
        </>
    )
}

export default Navigation;
