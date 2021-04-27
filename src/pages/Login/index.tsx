import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Button, Text } from '../../components'
import { API_AUTH_LOGIN } from '../../constants/api';
import { color } from '../../constants/colors';
import { ROUTE_HOME } from '../../constants/route';
import { AuthContext } from '../../providers/auth/indext';
import AuthService from '../../services/auth';

interface Props {
}

export default function LoginPage(props: Props): ReactElement {

    const { userLoggedIn } = useContext(AuthContext);
 
    const doLogin = () => {
        window.location.href = API_AUTH_LOGIN.url
    }

    return (
        <Route render={
            props => {
                if (!userLoggedIn) {
                    return <div className="flex items-center justify-center w-full h-screen"
                        style={{backgroundColor: color.BACKGROUND, color: 'white'}}>
                        <div className="flex w-full max-w-md">
                            <Button full type="primary" onClick={() => doLogin()}>Login</Button>
                        </div>
                    </div> 
                } else {
                    return <Redirect to={{pathname: ROUTE_HOME}} />
                }
            }
        }/>

        
    )
}    
