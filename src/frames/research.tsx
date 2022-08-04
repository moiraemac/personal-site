import React from 'react'

import Frame from './baseWithChildren'
import sentences from '../fixture/sentences'

const frameName = "Research"

const ResearchFrame = () => <Frame frameName={frameName} >
    <h3>Are Dogs Cute?</h3>
    <ul>
        <li>{sentences[2]}</li>
        <li>{sentences[3]}</li>
        <li>{sentences[8]}</li>
    </ul>
    <h3>Who's a good boy?</h3>
    <ul>
        <li>{sentences[4]}</li>
        <li>{sentences[15]}</li>
        <li>{sentences[12]}</li>
    </ul>
    <h3>Cats</h3>
    <ul>
        <li>{sentences[11]}</li>
    </ul>
</Frame>

export default ResearchFrame