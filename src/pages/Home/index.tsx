import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_AUTH_LOGIN, ROUTE_LANDING } from '../../constants/route'
import Logo from '../../assets/logo_dark.svg'
import { Text, Card, Button } from '../../components'
import { IconVideo, IconPlay } from '../../assets/icons'
import { color } from '../../constants/colors'

interface Props {
    
}

function HomePage(props: Props): ReactElement {
    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-20" style={{backgroundColor: color.BACKGROUND, color: 'white'}}>
            <div className="">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex items-center justify-between lg:w-0 lg:flex-1">
                        <Link to={ROUTE_LANDING}>
                            <span className="sr-only">Workflow</span>
                            <img className="h-8 w-auto sm:h-10" src={Logo} alt=""/>
                        </Link>
                        <Link to={ROUTE_AUTH_LOGIN}>
                            <Text bold>Login</Text>
                        </Link>
                    </div>
                </div>
            </div> 
            
            <div className="">
                <Text bold size="super">Finance</Text>
                <div className="flex flex-row w-full justify-between -mx-2 mt-5">
                    <div className="mx-2 w-full">
                        <Card.Container cursor="pointer">
                            <img src="https://source.unsplash.com/5fNmWej4tAA/1600x900"
                                className="w-full border-transparent rounded" alt=""/>
                            <Card.Content style={{background: color.SECONDARY}}>
                                <div className="">
                                    <Text white bold size="large">Finance</Text>
                                    <div className="flex flex-row">
                                        <IconVideo light/>
                                        <Text size="small" white style="ml-2">34 Videos</Text>
                                    </div>
                                </div>
                                <IconPlay/> 
                            </Card.Content>
                        </Card.Container> 
                    </div>
                    <div className="mx-2 w-full">
                        <Card.Container>
                            <img src="https://source.unsplash.com/5fNmWej4tAA/1600x900"
                                className="w-full border-transparent rounded" alt=""/>
                            <Card.Content style={{background: color.SECONDARY}}>
                                <div className="">
                                    <Text white bold size="large">Finance</Text>
                                    <div className="flex flex-row">
                                        <IconVideo light/>
                                        <Text size="small" white style="ml-2">34 Videos</Text>
                                    </div>
                                </div>
                                <IconPlay/> 
                            </Card.Content>
                        </Card.Container> 
                    </div>
                    <div className="mx-2 w-full">
                        <Card.Container>
                            <img src="https://source.unsplash.com/5fNmWej4tAA/1600x900"
                                className="w-full border-transparent rounded" alt=""/>
                            <Card.Content style={{background: color.SECONDARY}}>
                                <div className="">
                                    <Text white bold size="large">Finance</Text>
                                    <div className="flex flex-row">
                                        <IconVideo light/>
                                        <Text size="small" white style="ml-2">34 Videos</Text>
                                    </div>
                                </div>
                                <IconPlay/> 
                            </Card.Content>
                        </Card.Container> 
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomePage
