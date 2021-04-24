import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import AuthAPI from '../../api/auth';
import { Button, Text } from '../../components'
import { API_AUTH_LOGIN } from '../../constants/api';
import { color } from '../../constants/colors';
import { ROUTE_HOME } from '../../constants/route';

interface Props {
}

export default function LoginPage(props: Props): ReactElement {

    let history = useHistory();
    const authAPI: AuthAPI = new AuthAPI();

    const goToHome = () => {
        history.push(ROUTE_HOME)
    }

    const doLogin = () => {
        // authAPI.login()
        //     .then(data => {
        //         console.log(data);
        //     })
        window.location.href = API_AUTH_LOGIN.url
    }

    return (
        <div className="flex items-center justify-center w-full h-screen"
            style={{backgroundColor: color.BACKGROUND, color: 'white'}}>
            <div className="flex w-full max-w-md">
                <Button full type="primary" onClick={() => doLogin()}>Login</Button>
            </div>
        </div> 
    )
}    
