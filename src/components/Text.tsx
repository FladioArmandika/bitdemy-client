import classNames from 'classnames'
import React, { ReactElement } from 'react'


type textSize = "small" | "large" | 'xlarge' | 'jumbo' | 'super'
type textAlign = "left" | "center" | 'right'
interface Props {
    children: React.ReactNode,
    white?: boolean,
    bold?: boolean,
    size?: textSize,
    align?: textAlign,

    style?: string,
}

function Text(props: Props): ReactElement {
    return (
        <div className={classNames(""+props.style,{
            "text-white": props.white,
            "font-bold": props.bold,

            "text-sm": props.size === 'small',
            "text-lg": props.size === 'large',
            "text-4xl": props.size === 'xlarge',
            "text-6xl": props.size === 'jumbo',
            "text-8xl": props.size === 'super',

            "text-left": props.align === 'left',
            "text-center": props.align === 'center',
            "text-right": props.align === 'right',
        })}>
            {props.children}
        </div>
    )
}

export default Text
