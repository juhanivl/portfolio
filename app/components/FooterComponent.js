import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export default class FooterComponent extends Component {

  render(){
    return(
      <div>
      <RaisedButton label="Default"/>
     <p>
       Contact me via Linkedin <a href="https://www.linkedin.com/in/juhanilavonen?trk=hp-identity-photo" target="_blank">Linkedin</a>!
     </p>
      </div>

    );
  }
}
