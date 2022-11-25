import React, { Component } from 'react'
import Particles, { ISourceOptions } from "react-tsparticles";


export class Back extends Component {
    render() {
        return (
            <div>
               <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
            </div>
        )
    }
}

export default Back
