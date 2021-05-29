import React from 'react'

import BaseFrame from './base'
import allGrafs from '../fixture/text'

const frameName = "CV"
const grafs = [5, 13, 15].map(idx => allGrafs[idx])

const CVFrame = () => <BaseFrame frameName={frameName} grafs={grafs} />

export default CVFrame