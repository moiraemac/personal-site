import React from 'react'

import Frame from './baseWithChildren'
import sentences from '../fixture/sentences'

const frameName = "Links"

const LinksFrame = () => <Frame frameName={frameName} id="links">
    <a href="https://scholar.google.com/citations?user=lk20opgAAAAJ&hl=en">Google Scholar</a><br/>
    <a href="https://twitter.com/moiraemac">Twitter</a><br/>
    <a href="https://chengg04.github.io/docs/cv_ChengGuo.pdf">CV</a> (not mine, but still)
</Frame>

export default LinksFrame