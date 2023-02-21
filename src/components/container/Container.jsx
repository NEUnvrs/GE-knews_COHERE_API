import React from 'react'
import './container.css'
import PulseLoader from "react-spinners/PulseLoader";
import ReactTypingEffect from 'react-typing-effect';

function Container({ re, isLoading }) {
    return (
        <div className='Container'>
            {re !== null ? (
                <ReactTypingEffect
                    speed={20}
                    text={re}
                    eraseDelay={100000000000000000}
                    cursorClassName="Container__cursor"
                    displayTextRenderer={(text) => {
                        return (
                            <p id='container'>{text} </p>

                        )
                    }}
                />


            ) : null}
            {isLoading && <div className='loader'><PulseLoader color={'#ffffff'} loading={true} size={30} aria-label="Loading Spinner" data-testid="loader" /></div>}
        </div>
    )
}

export default Container