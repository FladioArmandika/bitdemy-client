import React, { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseAPI from '../../api/course';
import { color } from '../../constants/colors';
import { Course, Video } from '../../types/type';

interface RouteParams {
    courseId: string
}

interface Props {
    
}

export default function CourseDetail(props: Props): ReactElement {

    let params = useParams<RouteParams>();
    const courseAPI: CourseAPI = new CourseAPI();

    const [course, setCourse] = useState<Course>({})

    useEffect(() => {
        courseAPI.getCourse(params.courseId)
            .then((data) => {
                setCourse(data)
            })
    }, [])

    // GET VIDEO
    useEffect(() => {

    }, [])

    const renderVideo = (video: Video) => {
        return (
            <div>
                {video.title}
            </div>
        )
    }

    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-20" style={{backgroundColor: color.BACKGROUND, color: 'white'}}>


            <video controls>
                <source src="http://localhost:4000/video/stream"></source>
            </video>

            {
                course ?
                    course.videos?.map(video => {
                        return renderVideo(video)
                    })
                : <></>
            }
        </div>
    )
}
