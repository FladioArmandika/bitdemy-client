import classNames from 'classnames'
import React, { ReactElement } from 'react'


type textSize = "small" | "large" | 'super'
interface Props {
    children: React.ReactNode,
    white?: boolean,
    bold?: boolean,
    size?: textSize,


    style?: string,
}

function Text(props: Props): ReactElement {
    return (
        <div className={classNames(""+props.style,{
            "text-white": props.white,
            "font-bold": props.bold,

            "text-sm": props.size === 'small',
            "text-lg": props.size === 'large',
            "text-4xl": props.size === 'super',
        })}>
            {props.children}
        </div>
    )
}

export default Text
