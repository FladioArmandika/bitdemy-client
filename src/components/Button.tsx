import classNames from 'classnames'
import React, { ReactElement } from 'react'

// enum buttonType {
//     primary = "PRIMARY",
//     secondary = "SECONDARY",
// }

type buttonType = "primary" | "secondary"

interface Props { 
    children: React.ReactNode,
    type: buttonType, 
}
    
function Button(props: Props): ReactElement {
    return (
        <button
            className={classNames("flex w-full py-2 rounded justify-center font-bold text-white", {
                "bg-purple-500": props.type === "primary",
                "bg-yellow-500": props.type === "secondary",

                "hover:bg-purple-600": props.type === "primary",
            })}>
            {props.children}
        </button>
    )
}

export default Button
