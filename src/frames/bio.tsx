import React from 'react'

import Frame from './paragraphFrame'
import allGrafs from '../fixture/grafs'

const frameName = "About Me"
const grafs = [0, 19, 16, 5, 29].map(idx => allGrafs[idx])

const BiographyFrame = () => <Frame frameName={frameName} grafs={grafs} />

export default BiographyFrame