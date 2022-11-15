import React from 'react'

import BaseFrame from './paragraphFrame'
import allGrafs from '../fixture/grafs'

const frameName = "Contact"
const grafs = [27].map(idx => allGrafs[idx])

const ContactFrame = () => <BaseFrame frameName={frameName} grafs={grafs} id="contact" />

export default ContactFrame