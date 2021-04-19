import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_AUTH_LOGIN, ROUTE_LANDING } from '../../constants/route'

import Logo from '../../assets/logo.png'
import { Text } from '../../components'
import { color } from '../../constants/colors'

interface Props {
    
}

export default function LandingPage(props: Props): ReactElement {
    return (
        <div className="relative min-h-screen px-4 sm:px-6 lg:px-20" style={{backgroundColor: color.BACKGROUND, color: 'white'}}>
            <div className="pt-32">
                <div className="max-w-xl">
                    <Text size="xlarge" bold>Discover The Power of Knowledge</Text>
                </div>
            </div>
        </div>
    )
}
