import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory , IndexLink} from 'react-router'

//Component containing some projects I've made
export default class Projects extends Component {

  constructor(props){
    super(props);
    //Have a list of components in state in listOfProjects
    this.state = {
      isScrolling: "Not scrolling",
      isLoading: "Loading...",
      isMyFirstProject: "Projects...",
      listOfProjects: [
        //BALTIC NATIVE
        {
          img: './components/images/balticNative/Ios.jpg',
          title: "Baltic Native IOS View",
          description: "Baltic Native hybrid application's iOS view.",
        },
        {
          img: './components/images/balticNative/and.png',
          title: "Baltic Native Android View",
          description: "Baltic Native hybrid application's Android view.",
        },
        {
          img: './components/images/balticNative/nav.png',
          title: 'Drawer',
          description: "Baltic Native hybrid application's navigation drawer.",
        },
        //IMAGE EDITOR
        {
          img: './components/images/imageEditor/Rosary.jpg',
          title: 'Image Editor Original Photo',
          description: 'Original photo piece of art called Rosary in Kiasma',
        },
        {
          img: './components/images/imageEditor/edited.png',
          title: 'Image Editor in action',
          description: "After the editor's effects applied image is now edited",
        },
        //JAHAS
        {
          img: './components/images/jahas/profileView.jpg',
          title: 'J.A.H.A.S Profile View',
          description: "Just Another Health Application's profile view",
        },
        {
          img: './components/images/jahas/mapView.jpg',
          title: 'J.A.H.A.S Profile View',
          description: "Just Another Health Application's Map view",
        },
        {
          img: './components/images/jahas/stepCount.jpg',
          title: 'J.A.H.A.S Step Count View',
          description: "Just Another Health Application's Step Count view",
        },
        //LABS
        {
          img: './components/images/labs/lab1.jpg',
          title: 'Android Lab about Recycler View component',
          description: 'In first fragment we have recycler view of different dogs.',
        },
        {
          img: './components/images/labs/lab2.jpg',
          title: 'Android Lab about Recycler View component',
          description: 'In the second fragment we have image of individual dog.',
        }
      ]
    }
  }

  render(){
    //styles in JSON object
    const styles = {
      projectDiv: {
        backgroundColor: "#fafafa",
        margin: "10px",
      },
      imageStyle: {
        width: "50%",
        height: "50%"
      }
    };

    //Map project's in state into a single constant and in render's return reference it
    const projectDiv = this.state.listOfProjects.map((project) => {
      return (
        <div style={styles.projectDiv}   key={project.img}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img style={styles.imageStyle} src={project.img} />
        </div>
      )
    })


    return(
      <div>
        <div>
          <h1>{this.state.isMyFirstProject}</h1>
          {projectDiv}
        </div>

      </div>

    );
  }
}
