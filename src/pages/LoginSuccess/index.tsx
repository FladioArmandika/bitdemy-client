import React, { ReactElement, useEffect } from 'react'
import { Text } from '../../components'
import AuthService from '../../services/auth'

interface Props {
    
}

export default function LoginSuccess(props: Props): ReactElement {

    const authService: AuthService = new AuthService();

    useEffect(() => {
        const result = authService.verifyUser();

        alert(result)
    }, [])

    return (
        <div>
            <Text>LOGIN SUCCESS</Text>
        </div>
    )
}
