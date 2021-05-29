import React from 'react'

import BaseFrame from './base'
import allGrafs from '../fixture/text'

const frameName = "Biograpy"
const grafs = [0, 19, 16, 5, 29].map(idx => allGrafs[idx])

const BiographyFrame = () => <BaseFrame frameName={frameName} grafs={grafs} />

export default BiographyFrame