import React from 'react';
import {connect} from 'react-redux';

export default function Introduction() {
  return <div className="Introduction">
    <div className="so-back">
      <div className="so-chunk">
        <div className="Introduction__container">
          <h2>Rover Lab</h2>
          <p></p>
          <img src="rover_network.gif" style={{width: '170%'}}/>
      
        </div>


        <div className="Introduction__container">


          <p className="Introduction__lead">The Rover Lab is a set of tools that enables people to try out and learn about the Rover network. The laboratory can <a href="#txbuilder">build transactions</a>, <a href="#txsigner">sign them</a>, and <a href="#explorer?resource=transactions&endpoint=create">submit them to the network</a>. It can also <a href="#explorer">make requests to any of the Orbit endpoints</a>.</p>

          <p>For Rover docs, take a look at the <a href="https://www.rover.network/developers/">Rover developers site</a>.</p>
        
        </div>
      </div>
    </div>
  </div>
}

