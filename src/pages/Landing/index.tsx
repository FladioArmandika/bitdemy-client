import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_AUTH_LOGIN, ROUTE_LANDING } from '../../constants/route'

import Logo from '../../assets/logo.png'

interface Props {
    
}

export default function LandingPage(props: Props): ReactElement {
    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-between lg:w-0 lg:flex-1">
                        <Link to={ROUTE_LANDING}>
                            <span className="sr-only">Workflow</span>
                            <img className="h-8 w-auto sm:h-10" src={Logo} alt=""/>
                        </Link>
                        <Link to={ROUTE_AUTH_LOGIN}>login</Link>
                    </div>
                </div>
            </div> 
            {/* Landing
            <Link to={ROUTE_AUTH_LOGIN}>login</Link>

            <div className="relative bg-gray-800" >
                <video controls muted>
                    <source src="http://localhost:3000/video" type="video/mp4"></source>
                </video>
            </div> */}
        </div>
    )
}
