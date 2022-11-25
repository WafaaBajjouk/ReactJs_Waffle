import React, { Component }  from 'react';

import back from '../imgs/6.png';
import Typical from 'react-typical'

import Particles, { ISourceOption} from "react-tsparticles";


export class Home extends Component {
    render() {
        // const style = { color: "white", fontSize: "1.5em" }

        return (
    //         <div className="main"> 

    //                 <div className="sidetitle">
    //                 <h1> Hi There👋 ,I'm Waffle👩‍💻🇲🇦 </h1>  

    //                 <Typical
    //                         steps={['Software Engeniring Student', 2500, 'Full Stack developer : JEE & Angular  !', 5000]}
    //                         loop={Infinity}
    //                         wrapper="p"
    //                         className="typical"
    //                     />

    //                 <p>3 Years of software development experience in object-oriented programming, development of Multi-Tier distributed, Enterprise applications using Java and J2EE technologies with Software Development Life Cycle.  
    //                 </p>

    //                 </div>
    //                     <div className="picture">
    //                         <img src={back} alt="background"   width="700" 
    //                         height="700" />
    //                     </div>
    //         </div>
    //     )
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
        )
    }
}

export default Home
