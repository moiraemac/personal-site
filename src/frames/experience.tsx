import React from 'react'

import BaseFrame from './base'
import allGrafs from '../fixture/text'

const frameName = "Experience"
const grafs = [27, 11, 16].map(idx => allGrafs[idx])

const ExperienceFrame = () => <BaseFrame frameName={frameName} grafs={grafs} />

export default ExperienceFrame