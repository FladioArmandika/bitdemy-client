import React, { ReactElement } from 'react'
import { Route } from 'react-router-dom'

export default function ProtectedRoute({component: Component, ...rest}: any): ReactElement {
    return (
        <Route {...rest} render={
            props => {
                if (true) {
                    return <Component {...rest} {...props}/>
                }
            }
        }/>
    )
}
