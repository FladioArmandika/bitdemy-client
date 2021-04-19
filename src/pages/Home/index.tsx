import React, { ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_AUTH_LOGIN, ROUTE_COURSE_DETAIL, ROUTE_LANDING } from '../../constants/route'
import Logo from '../../assets/logo_dark.svg'
import { Text, Card, Button } from '../../components'
import { IconVideo, IconPlay } from '../../assets/icons'
import { color } from '../../constants/colors'
import CategoryAPI from '../../api/category'
import { Category, Course } from '../../types/style'

interface Props {
    
}

function HomePage(props: Props): ReactElement {

    const categoryAPI = new CategoryAPI();

    const [finance, setFinance] = useState<Category>({_id: '', name:'', courses: []});

    useEffect(() => {
        categoryAPI.getCategory("607a9512bcd1c75724624356")
            .then(data => {
                console.log(data);
                setFinance(data);
            })
    }, [])

    const renderCategory = (course: Course) => {
        return (
            <div className="mx-2 w-full mt-4 md:mt-0">
                <Card.Container cursor="pointer">
                    <img src="https://source.unsplash.com/5fNmWej4tAA/1600x900"
                        className="w-full border-transparent rounded" alt=""/>
                    <Card.Content style={{background: color.SECONDARY}}>
                        <div className="">
                            <Text white bold size="large">{ course.name }</Text>
                            <div className="flex flex-row">
                                <IconVideo light/>
                                <Text size="small" white style="ml-2">{ course.videos?.length } Videos</Text>
                            </div>
                        </div>
                        <Link to={{ pathname: ROUTE_COURSE_DETAIL + course._id }} >
                            <IconPlay/> 
                        </Link>
                    </Card.Content>
                </Card.Container> 
            </div>
        )
    }

    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-20" style={{backgroundColor: color.BACKGROUND, color: 'white'}}>
            <div>
                <Text size="xlarge" bold align='center'>Popular Courses</Text>
                <Text align="center">Pelajari ilmu terbaru dari mentor yang berpengalaman di bidangnya</Text>
            </div>
            
            <div className="">
                <Text bold size="xlarge">Finance</Text>
                <div className="flex flex-col md:flex-row w-full justify-between -mx-2 mt-5">
                    {
                        finance ? 
                            finance.courses.map((course: Course, index: number) => {
                                return (renderCategory(course))
                            })
                        : <></>
                    }
                </div>
            </div>


        </div>
    )
}

export default HomePage
