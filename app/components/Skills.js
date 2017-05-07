import React, { Component } from 'react';

export default class Skills extends Component {

  constructor(props){
    super(props)
    this.state = {
      listOfSkills: [
        {
          skillName: "Javascript",
          levelOfSkill: "good"
        },
        {
          skillName: "React",
          levelOfSkill: "good"
        },
      ]
    }
    this.handleAddSkill = this.handleAddSkill.bind(this);
  }

  handleAddSkill(){
    var newSkill = {
      skillName: document.getElementById("skillNameInput").value,
      levelOfSkill: document.getElementById("levelOfSkillInput").value
    }

    var copyOfListOfSkills = this.state.listOfSkills;

    copyOfListOfSkills.splice(-1,1);
    copyOfListOfSkills.unshift(newSkill);
    this.setState({
      listOfSkills: copyOfListOfSkills
    })

  }

  /*
  Add a text box and a button to add
  a skill to the first of the list and remove the last one
  (Have a proper object with related properties such as
   skill name, photo ID, and etc.)
   */

  render(){
    const listOfSkills = this.state.listOfSkills.map((skill) => {
      return (
        <div key={skill.skillName}>
          <b>Skill Name</b>
          <p>{skill.skillName}</p>
          <b>Level of Skill</b>
          <p>{skill.levelOfSkill}</p>
        </div>
      )
    })

    return (
      <div>
        {listOfSkills}
        <input id="skillNameInput" type="text" placeholder="Skill Name"></input>
        <input id="levelOfSkillInput" type="text" placeholder="Level of Skill"></input>
        <button onClick={this.handleAddSkill}>Add skills</button>
      </div>
    )
  }
}
