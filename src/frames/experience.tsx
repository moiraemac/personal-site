import React from 'react'

import BaseFrame from './paragraphFrame'
import allGrafs from '../fixture/grafs'

const frameName = "Experience"
const grafs = [27, 11, 16].map(idx => allGrafs[idx])

const ExperienceFrame = () => <BaseFrame frameName={frameName} grafs={grafs} />

export default ExperienceFrame