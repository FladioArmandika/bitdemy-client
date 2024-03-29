import classNames from 'classnames'
import React, { ReactElement } from 'react'
import { color } from '../constants/colors'
import { StyleCursor } from '../types/style'

interface Props {
    children: React.ReactNode,

    height?: number,
    width?: number,
    style?: any, 
    cursor?: StyleCursor
}    

class Card {

    public static Container(props: Props): ReactElement {
        return (
            <div className={classNames( 
                `flex flex-col rounded w-full
                border-transparent  bg-no-repeat 
                h-${props.height} w-${props.width}
                cursor-${props.cursor}`, {

            })}
               style={{...props.style, background: color.BACKGROUND_SECONDARY}}>
                {props.children}
            </div>
        )
    }
    
    public static Content(props: Props): ReactElement {
        return (    
            <div className={classNames(  
                `py-4 px-5 flex justify-between items-center rounded`,  
                {}
            )} 
            style={{...props.style, background: color.BACKGROUND_SECONDARY}}> 
                {props.children}
            </div>
        )
    }  
}



export default Card
