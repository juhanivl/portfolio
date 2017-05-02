import React, { Component } from 'react';


export default class ContactComponent extends Component {

  render(){
    /*
      Add contact me form including the following fields:
       First name (Text box) (Validation: no blank – less than
      25 character)
       Last name (Text box) (Validation: no blank – less than
      25 character)
       Gender (Dropdown box) (Validation: no blank)
       Age (Text box) (Validation: no blank – older than 18 –
      blow than 100)
       Email address (Text box) (Validation: no blank – proper
      email – less than 50 character)
       Website address (Text box) (Validation: no blank –
      proper URL – less than 50 character)
       Comment (Text box) (Validation: no blank – proper URL
      – less than 255 character)
       Reset button – To reset the entered information
      After submit, you need to validate all the information, and finally show at the bottom of the page.
    */

    const styles = {
      asd: {
        backgroundColor: "#fafafa"
      },
      testStyle: {
        display: "flex",
        width: "100%",
        height: "100%",
        flex: 1
      },
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: "100%",
        height: "100%",
        overflowY: 'auto',
      },
    };

    return(
      <div style={styles.asd}>
        <h1>Contact me!</h1>
        <p>Something caught your eye? Interested to know more about me? <br/> Or do you just wanna talk about Star Wars?</p>
        <h2>LinkedIn</h2>
        <p>
          Contact me via Linkedin <a href="https://www.linkedin.com/in/juhanilavonen?trk=hp-identity-photo" target="_blank">Linkedin</a>!
        </p>
        <h2>Email</h2>
          <p>
            Wanna send an electronic mail?
          </p>
          <p>
            <a href="mailto:juhani.lavonen@outlook.com">Do it here!</a>
          </p>
        <h2>Check out my CV!</h2>
          <p>
            You can also check more about from my CV!
          </p>
          <p>
            <a href="./components/resources/CV.pdf" download="FileName">Download it here!</a>
          </p>
        <h3>You're awesome</h3>

      </div>
    );
  }
}
