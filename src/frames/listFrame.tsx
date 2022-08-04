import React from 'react'
import '../App.css'

type Props = {
    frameName: string
    items: string[]
}

function ListFrame(props: Props) {
    return (
        <div className="Frame List-Frame">
            <h2>{props.frameName}</h2>
            <ul>
                {props.items.map((item: string) => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default ListFrame;
