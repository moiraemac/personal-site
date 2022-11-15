import React from 'react'

import BaseFrame from './paragraphFrame'
import allGrafs from '../fixture/grafs'

const frameName = "Publications"
const grafs = [8, 9, 27, 10, 18].map(idx => allGrafs[idx])

const PublicationsFrame = () => <BaseFrame frameName={frameName} grafs={grafs} id="publications" />

export default PublicationsFrame