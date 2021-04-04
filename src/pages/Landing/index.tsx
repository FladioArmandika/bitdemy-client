import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    
}

export default function LandingPage(props: Props): ReactElement {
    return (
        <div>
            Landing

            <Link to='login'>login</Link>

            <div className="relative bg-gray-800" >
                <video controls muted>
                    <source src="http://localhost:3000/video" type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}
