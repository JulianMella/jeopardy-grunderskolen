import { useState } from "react"
import './TeamBox.css'

export function TeamBox({counter, setCounter}) {
    return (
        <div className="team-main">
            <ol style={{
                '-webkit-user-select': 'none', /* Safari */
                '-moz-user-select': 'none', /* Firefox */
                '-ms-user-select': 'none', /* IE10+/Edge */
                'user-select': 'none',
                cursor: 'default',
            }}>
                <li>ahahahan</li>
                <li>JOHAN</li>
                <li>Johan</li>
            </ol>
            <div className="bottom">
                <p style={{'-webkit-user-select': 'none', /* Safari */
                '-moz-user-select': 'none', /* Firefox */
                '-ms-user-select': 'none', /* IE10+/Edge */
                'user-select': 'none',
                cursor: 'default',}}>Total points: {counter}</p>
                <button onClick={() => setCounter(counter => counter +200)} style={{cursor: 'pointer','-webkit-user-select': 'none', /* Safari */
                '-moz-user-select': 'none', /* Firefox */
                '-ms-user-select': 'none', /* IE10+/Edge */
                'user-select': 'none',}}>Øk poeng ($200)</button>
            </div>

        </div>
    )
}