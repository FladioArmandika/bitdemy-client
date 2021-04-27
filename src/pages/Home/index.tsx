import React, { ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_COURSE_DETAIL } from '../../constants/route'
import { Text, Card } from '../../components'
import { IconVideo, IconProductivity, IconPlay, IconCode, IconFinance, IconBusiness, IconLanguage, IconDesign } from '../../assets/icons'
import { color } from '../../constants/colors'
import CategoryAPI from '../../api/category'
import { Category, Course } from '../../types/type'

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
                    <Card.Content style={{background: color.BACKGROUND_SECONDARY}}>
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
        <div className="">
        <div className=" relative min-h-screen px-4 sm:px-6 lg:px-20" 
            style={{backgroundColor: color.BACKGROUND, color: 'white'}}>
            <div>
                <img src="https://source.unsplash.com/p0j-mE6mGo4/1600x900"
                className="absolute left-0 w-full max-h-96 object-cover
                    top-0 -mt-20 opacity-30"
                    style={{
                            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))', 
                            zIndex: 0,
                        }}></img>

                <div className="relative w-full flex justify-center items-center">
                    <div className="max-w-md text-center mt-28">
                        <Text size="xlarge" bold align='center'>Popular Courses</Text>
                        <Text align="center" style="mt-5">Pelajari ilmu terbaru dari mentor yang berpengalaman di bidangnya</Text>
                    </div>
                </div>

                <div className="mt-32 relative">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="max-w-sm w-full mt-3 md:mt-0"> 
                            <Card.Container cursor="pointer">
                                <Card.Content>
                                    <div className="flex flex-row items-center">
                                        <IconFinance />
                                        <Text size="large" style="ml-4">Finance</Text>
                                    </div>
                                </Card.Content>
                            </Card.Container>
                        </div>
                        <div className="max-w-sm w-full mt-3 md:mt-0"> 
                            <Card.Container cursor="pointer">
                                <Card.Content>
                                    <div className="flex flex-row items-center">
                                        <IconBusiness />
                                        <Text size="large" style="ml-4">Business</Text>
                                    </div>
                                </Card.Content>
                            </Card.Container>
                        </div>
                        <div className="max-w-sm w-full mt-3 md:mt-0"> 
                            <Card.Container cursor="pointer">
                                <Card.Content>
                                    <div className="flex flex-row items-center">
                                        <IconLanguage />
                                        <Text size="large" style="ml-4">Language</Text>
                                    </div>
                                </Card.Content>
                            </Card.Container>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row  justify-between mt-0 md:mt-5">
                        <div className="max-w-sm w-full mt-3 md:mt-0"> 
                            <Card.Container cursor="pointer">
                                <Card.Content>
                                    <div className="flex flex-row items-center">
                                        <IconDesign />
                                        <Text size="large" style="ml-4">Design</Text>
                                    </div>
                                </Card.Content>
                            </Card.Container>
                        </div>
                        <div className="max-w-sm w-full mt-3 md:mt-0"> 
                            <Card.Container cursor="pointer">
                                <Card.Content>
                                    <div className="flex flex-row items-center">
                                        <IconCode />
                                        <Text size="large"  style="ml-4">Programming</Text>
                                    </div>
                                </Card.Content>
                            </Card.Container>
                        </div>
                        <div className="max-w-sm w-full mt-3 md:mt-0"> 
                            <Card.Container cursor="pointer">
                                <Card.Content>
                                    <div className="flex flex-row items-center">
                                        <IconProductivity />
                                        <Text size="large" style="ml-4">Productivity</Text>
                                    </div>
                                </Card.Content>
                            </Card.Container>
                        </div>
                    </div>
                </div>
            </div>
           

            
            <div className="mt-10">
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
        </div>
    )
}

export default HomePage
