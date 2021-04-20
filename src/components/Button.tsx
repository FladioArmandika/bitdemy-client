import classNames from 'classnames'
import React, { ReactElement } from 'react'

// enum buttonType {
//     primary = "PRIMARY",
//     secondary = "SECONDARY",
// }

type buttonType = "primary" | "secondary"

type buttonSize = "sm" | "md" | 'lg'

interface Props { 
    children: React.ReactNode,
    type: buttonType, 
    full?: boolean,
    onClick: any, 
    size?: buttonSize,
    style?: string,
}
    
function Button(props: Props): ReactElement {
    return (
        <button
            className={classNames("flex py-2 px-2 rounded justify-center font-bold text-white hover:bg-opacity-90 "+props.style, {
                "bg-purple-600": props.type === "primary",
                "bg-purple-400": props.type === "secondary",

                "text-purple-600": props.type === "secondary",

                "hover:bg-purple-600": props.type === "primary",
                "hover:bg-purple-400": props.type === "secondary",

                "w-full": props.full,

                "px-2 py-2": props.size === "sm",
                "px-4 py-4": props.size === "md",
                "px-8 py-8": props.size === "lg",
            })}
            
            onClick={() => props.onClick()}
            
            >
            {props.children}
        </button>
    )
}

export default Button
