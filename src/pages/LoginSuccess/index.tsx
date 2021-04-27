import React, { ReactElement, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { Text } from '../../components'
import { ROUTE_HOME } from '../../constants/route';
import AuthService from '../../services/auth'

interface Props {
    
}

export default function LoginSuccess(props: Props): ReactElement {

    const authService: AuthService = new AuthService();
    const history = useHistory();

    useEffect(() => {
        // authService.verifyUser()
        //     .then((data) => {
        //         if (data) {
        //             console.log(data)
        //         } 
        //     });

        setTimeout(() => {
           history.push(ROUTE_HOME)
        }, 1000)

    }, [])

    return (
        <div className="h-screen w-full flex flex-col justify-center">
            <Text align="center">LOGIN SUCCESS</Text>
        </div>
    )
}
