import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ROUTE_AUTH_LOGIN } from '../constants/route';
import { AuthContext } from '../providers/auth/indext';
import AuthService from '../services/auth'

export default function ProtectedRoute({component: Component, ...rest}: any): ReactElement {

    const authService: AuthService = new AuthService();
    const { userLoggedIn, setUserLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        authService.verifyUser()
            .then((data) => {
                if (!data) {
                    setUserLoggedIn(false)
                } else {
                    setUserLoggedIn(true)
                }
            })
    }, [])

    return (
        <Route {...rest} render={
            props => {
                if (userLoggedIn) {
                    return <Component {...rest} {...props}/>
                } else {
                    return <Redirect to={{pathname: ROUTE_AUTH_LOGIN}} />
                }
            }
        }/>
    )
    
}
