import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory , IndexLink} from 'react-router'
import ContactComponent from './components/ContactComponent.js';


class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home}/>
          <Route path='skills' component={Skills} />
          <Route path='projects' component={Projects}>
            <IndexRoute component={ProjectLandingPage} />
            <Route path='firstProject' component={FirstProject} />
            <Route path='secondProject' component={SecondProject} />
          </Route>
          <Route path='gallery' component={Gallery} />
          <Route path='contact' component={ContactComponent} />

          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Container = (props) => <div>
<div>
  <IndexLink activeClassName='active' to='/'>HOME</IndexLink>&nbsp;
  <IndexLink activeClassName='active' to='/skills'>SKILLS</IndexLink>&nbsp;
  <IndexLink activeClassName='active' to='/projects'>PROJECTS</IndexLink>&nbsp;
  <IndexLink activeClassName='active' to='/gallery'>GALLERY</IndexLink>&nbsp;
  <IndexLink activeClassName="active" to='/contact'>CONTACT</IndexLink>&nbsp;

  <IndexLink activeClassName='active' to='/address'>ADDREPSS</IndexLink>&nbsp;
  <IndexLink activeClassName='active' to='/about'>ABOUT</IndexLink>
  <IndexLink activeClassName='active' to='/namedComponent'>NAMED COMPONENTS</IndexLink>
</div>
  {props.children}
</div>


/**COMPONENTS*/
const Home = () => <h1>Hello from Home!</h1>
const Skills = () => <h1>Skills</h1>
const Projects = (props) =><div>
  <h1>Projects</h1>
  <Link to='/projects'>Project Landing Page</Link>&nbsp;
  <Link to='/projects/firstProject'>First Project</Link>
  <Link to='/projects/secondProject'>Second Project</Link>
  {props.children}
</div>
const ProjectLandingPage = () => <h3>Project Landing Page</h3>
const FirstProject = () => <h3>FirstProject</h3>
const SecondProject = () => <h3>SecondProject</h3>
const Gallery = () => <h3>Gallery</h3>
const Contact = () =><h3>Contact</h3>

const Address = (props) => <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>


const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)
const Title = () => (<h1>Hello from Title Component</h1>)
const SubTitle = () => (<h1>Hello from SubTitle Component</h1>)

const NotFound = () => (<h1>404.. This page is not found!</h1>)


/*
const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>
    <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>
  </div>
)
*/
export default App
