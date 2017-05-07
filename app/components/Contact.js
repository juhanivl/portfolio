import React, { Component } from 'react';


export default class ContactComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      firstNameInput: "",
      lastNameInput: "",
      genderInput: "male",
      ageInput: "",
      emailAddressInput: "",
      websiteInput: "",
      commentInput: "",
      isValidInfo: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  //everytime something changes in any of input fields update the corresponding state
  handleChange(event){
    this.setState({
       [event.target.id]: event.target.value
     }
    );
  }

  //In submit check that there are values and they are sufficient enough
  //update the state with the values
  handleSubmit(){
    if(this.state.firstNameInput &&
      this.state.firstNameInput.length < 25 &&
      this.state.lastNameInput &&
      this.state.lastNameInput.length < 25 &&
      this.state.genderInput &&
      18 <=this.state.ageInput <= 100 &&
      this.state.emailAddressInput &&
      this.state.emailAddressInput.length <=50 &&
      this.state.websiteInput &&
      this.state.websiteInput.length <= 50 &&
      this.state.commentInput &&
      this.state.commentInput.length <= 255
      ){
      this.setState({
        isValidInfo: true
      })

    }else{
      alert("Some of the input's didn't meet the requirements :(");
    }
  }

  //In reset set input values to be null and update the state
  handleReset(){
    this.setState({
      firstNameInput: "",
      lastNameInput: "",
      genderInput: "male",
      ageInput: "",
      emailAddressInput: "",
      websiteInput: "",
      commentInput: "",
      isValidInfo: false
    });
  }

  render(){
    let results = <p>Loading...</p>
    if(this.state.isValidInfo){
       results = <div>
        <b>First Name</b>
         <p>{this.state.firstNameInput}</p>
         <b>Last Name</b>
         <p>{this.state.lastNameInput}</p>
         <b>Gender</b>
         <p>{this.state.genderInput}</p>
         <b>Age</b>
         <p>{this.state.ageInput}</p>
         <b>Emai</b>
         <p>{this.state.emailAddressInput}</p>
         <b>Website</b>
         <p>{this.state.websiteInput}</p>
         <b>Comment</b>
         <p>{this.state.commentInput}</p>
       </div>
    }else{
       results = <div>Type in your info to see results</div>
    }

    const styles = {
      asd: {
        backgroundColor: "#fafafa"
      }
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

          <input type="text" value={this.state.firstNameInput} id="firstNameInput"  onChange={this.handleChange} placeholder="First name" maxLength="25"></input>
          <br/>
          <input type="text" value={this.state.lastNameInput} id="lastNameInput"  onChange={this.handleChange} placeholder="Last name" maxLength="25"></input>
          <br/>
          <select id="genderInput"
          onChange={this.handleChange}>
            <option  value="male">Male</option>
            <option  value="female">Female</option>
          </select>
          <br/>
          <input type="number" value={this.state.ageInput} id="ageInput"  onChange={this.handleChange} placeholder="Age" min="18" max="100"></input>
          <br/>
          <input type="email" value={this.state.emailAddressInput} id="emailAddressInput"  onChange={this.handleChange} placeholder="Email name" maxLength="50"></input>
          <br/>
          <input type="url" value={this.state.websiteInput} id="websiteInput"  onChange={this.handleChange} placeholder="Website" maxLength="50"></input>
          <br/>
          <textarea type="text" value={this.state.commentInput} id="commentInput"  onChange={this.handleChange} placeholder="Comment" maxLength="255"></textarea>
          <br/>
          <button onClick={this.handleSubmit}>Submit</button>
          <br/>
          <button onClick={this.handleReset}>Reset</button>
          {results}
        <h3>You're awesome!</h3>

      </div>
    );
  }
}
