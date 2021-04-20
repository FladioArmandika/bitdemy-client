import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_AUTH_LOGIN, ROUTE_LANDING } from '../../constants/route'

import Logo from '../../assets/logo.png'
import { Button, Text } from '../../components'
import { color } from '../../constants/colors'

interface Props {
    
}

export default function LandingPage(props: Props): ReactElement {
    return (
        <div className="relative min-h-screen max-w-full px-4 sm:px-6 lg:px-20 overflow-hidden" style={{backgroundColor: color.BACKGROUND, color: 'white'}}>
            <div className="pt-16">
                <div className="max-w-2xl">
                    <Text size="jumbo" bold style="md:text-8xl">Discover The Power of Knowledge</Text>
                    <Text style="mt-8">
                        Learn everything you want from highly-skilled and experienced guru
                    </Text>
                    <div className="mt-8 flex flex-col md:flex-row md:max-w-lg">
                        <Button type="primary" size="md" full
                            onClick={() => alert()}>
                            Register
                        </Button>
                        <Button type="secondary" size="md" full
                            style="md:ml-2 md:mt-0 mt-2"
                            onClick={() => alert()}>
                            Catalog
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
