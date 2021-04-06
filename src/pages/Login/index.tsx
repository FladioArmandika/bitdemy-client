import React, { ReactElement } from 'react'
import { Button } from '../../components'

interface Props {
}

export default function LoginPage(props: Props): ReactElement {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="flex w-full max-w-md">
                <Button type="primary">Login</Button>
            </div>
        </div>
    )
}
