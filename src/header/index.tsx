import React, { useCallback, useState } from 'react'
import '../App.css'
import '../burger.css'
import logo from '../resources/headshot.jpg';

type Props = {
    collapseState: number // 0 for full size, 1 for collapsed
}

function Frame(props: Props) {
    const [showMenu, setShowMenu] = useState(false)
    const [dirty, setDirty] = useState(false)
    const toggle = useCallback(() => {
        setShowMenu(!showMenu)
        setDirty(true)
    }, [showMenu])
    return (
        <div className="Header">
            <div className="Headshot-container">
                <img src={logo} className="Headshot" alt="logo" />
            </div>
            <div className="Text-container">
                <h2 className="Primary">Moira MacNeil</h2>
                <p className="Secondary">PhD Student in Operations Research</p>
                <p className="Tertiary">University of Toronto</p>
            </div>
            <div className="Menu-container">
                <button className={`hamburger hamburger--arrowalt-r ${showMenu ? ' is-active' : ''}`} type="button" onClick={toggle}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className={`Background ${dirty ? 'Dirty' : ''} ${showMenu ? 'Visible' : ''}`}>
                    <button className="Navigation-link">Biography</button>
                    <button className="Navigation-link">Experience</button>
                    <button className="Navigation-link">Awards</button>
                    <button className="Navigation-link">Publications</button>
                    <button className="Navigation-link">Contact</button>
                    <button className="Navigation-link">CV</button>
                </div>
            </div>

        </div>
    )
}

export default Frame;
