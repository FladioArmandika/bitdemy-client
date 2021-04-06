import React, { ReactElement } from 'react'

interface Props {
    children: React.ReactNode
}

function Text(props: Props): ReactElement {
    return (
        <div>{props.children}</div>
    )
}

export default Text
