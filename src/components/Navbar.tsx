import React, { ReactElement, ReactNode, useEffect } from 'react'
import { ROUTE_AUTH_LOGIN, ROUTE_COURSE, ROUTE_COURSE_DETAIL, ROUTE_HOME, ROUTE_LANDING } from '../constants/route'
import Logo from '../assets/logo_dark.svg'
import { Link, useLocation } from 'react-router-dom'
import Text from './Text'

interface Props {
    children?: ReactNode
}

export default function Navbar(props: Props): ReactElement {

    const location = useLocation();

    const navbarRoutes = [
        ROUTE_LANDING,
        ROUTE_COURSE,
        ROUTE_COURSE_DETAIL,
        ROUTE_HOME,
    ]

    return (
        <div> 
            {
                navbarRoutes.includes(location.pathname) ? 
                    <div className="absolute left-0 top-0 w-full px-4 sm:px-6 lg:px-20 z-50" style={{color: 'white'}}>
                        <div className="">
                            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                                <div className="flex items-center w-full justify-between lg:w-0 lg:flex-1">
                                    <Link to={ROUTE_LANDING} className="">
                                        <span className="sr-only">Workflow</span>
                                        <img className="h-8 w-auto sm:h-10" src={Logo} alt=""/>
                                    </Link>
                                    <Link to={ROUTE_AUTH_LOGIN}>
                                        <Text bold>Login</Text>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> 
                : <></>
            }
        </div>
    )
}
