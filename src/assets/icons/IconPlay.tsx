import React, { ReactElement } from 'react'

import { color } from '../../constants/colors'

interface Props {
    light?: boolean
}


function IconPlay(props: Props): ReactElement {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="42" height="42"
            fill="none" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="21" fill={color.PRIMARY}></circle>
            <path
                fill="white"
                d="M30 19.768c1.333.77 1.333 2.694 0 3.464l-12.75 7.361c-1.333.77-3-.192-3-1.732V14.14c0-1.54 1.667-2.502 3-1.732L30 19.767z"
            ></path>
        </svg>
    )
}

export default IconPlay
