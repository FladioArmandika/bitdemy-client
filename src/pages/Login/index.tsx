import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Text } from '../../components'
import { color } from '../../constants/colors';
import { ROUTE_HOME } from '../../constants/route';

interface Props {
}

export default function LoginPage(props: Props): ReactElement {

    let history = useHistory();

    const goToHome = () => {
        history.push(ROUTE_HOME)
    }

    return (
        <div className="flex items-center justify-center w-full h-screen"
            style={{backgroundColor: color.BACKGROUND, color: 'white'}}>
            <div className="flex w-full max-w-md">
                <Button full type="primary" onClick={() => goToHome()}>Login</Button>
            </div>
        </div> 
    )
}    
