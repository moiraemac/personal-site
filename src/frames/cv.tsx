import React from 'react'

import BaseFrame from './paragraphFrame'
import allGrafs from '../fixture/grafs'

const frameName = "CV"
const grafs = [5, 13, 15].map(idx => allGrafs[idx])

const CVFrame = () => <BaseFrame frameName={frameName} grafs={grafs} id="cv" />

export default CVFrame