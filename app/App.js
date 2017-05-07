import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory , IndexLink} from 'react-router'

import Home from './components/Home.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js'
import Gallery from './components/Gallery.js'
import ContactComponent from './components/Contact.js';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home}/>
          <Route path='skills' component={Skills} />
          <Route path='projects' component={Projects} />
          <Route path='gallery' component={Gallery} />
          <Route path='contact' component={ContactComponent} />
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

var style = {
  display: 'block',
  width: '100%',
  position: "fixed",
  left: "0",
  bottom: "0",
};


const containerStyle = {
  main: {
    display: "flex",
    flex: 100,
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  appBar: {
    width: "100%",
    flex: 10
  },
  section: {
    width: "100%",
    flex: 80,
    //marginBottom: "40px"
  },
  footer: {
    width: "100%",
    flex: 10,
    position: "fixed",
    left: "0",
    bottom: "0"
  }
};

/*
[html, body
{
  width: 100%;
  height: 100%;
  margin: 0;
}

div {
padding: 0px;
margin: 5px;
}


#container {
display: flex;
flex: 100;
height: 100%;
flex-direction: column;
}

#header {
flex: 10;
background-color: paleturquoise;
}

#content{
display: flex;
justify-content:
space-around;
flex-direction: row;
flex: 80;
background-color: oldlace;
}


#nav{
flex: 20;
background-color: khaki;
}

#article{
flex: 40;
background-color: palegreen;
}

#aside{
flex: 20;
background-color: lightsalmon;
}


#footer{
flex: 10;
background-color: paleturquoise;

}
*/

const Container = (props) =>
  <div style={containerStyle.main}>
    <div style={containerStyle.appBar}>
      <AppBarExample/>
    </div>

    <div style={containerStyle.section}>
      {props.children}
    </div>
  </div>

const AppBarExample = () => (
  <AppBar
    title="Juhani Lavonen | Portfolio"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<KebabMenu />}
  />
);
const KebabMenu = () => (
  <IconMenu
   iconButtonElement={
     <IconButton><MoreVertIcon /></IconButton>
   }
   targetOrigin={{horizontal: 'right', vertical: 'top'}}
   anchorOrigin={{horizontal: 'right', vertical: 'top'}}
   touchTapCloseDelay={200}>
     <MenuItem primaryText="Home" containerElement={<Link to="/"/>}/>
     <MenuItem primaryText="Skills" containerElement={<Link to="/skills"/>}/>
     <MenuItem primaryText="Projects" containerElement={<Link to="/projects"/>}/>
     <MenuItem primaryText="Gallery" containerElement={<Link to="/gallery"/>}/>
     <MenuItem primaryText="Contact" containerElement={<Link to="/contact"/>}/>
     <MenuItem primaryText="Named Component" containerElement={<Link to="/namedComponent"/>}/>
     <MenuItem primaryText="Close"/>
   </IconMenu>
);


/**COMPONENTS*/
const NamedComponents = (props) => (
  <div>
    {props.title}
    <br/>
    <a href="https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr" target="_blank">  Setting up React JS envinronment</a><br/>
    <a href="https://github.com/callemall/material-ui/issues/4819" target="_blank">Adding Roboto Font</a><br/>
    <a href="http://www.material-ui.com/#/" target="_blank">Material UI</a><br/>
    <a href="http://ccoenraets.github.io/es6-tutorial/setup-webpack/" target="_blank">Setting Up Webpack</a><br/>

    {props.subTitle}
    <a href="  https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669" target="_blank">Beginner’s Guide to React Router</a>

  </div>
)
const Title = () => (<h1>Here are some of my favourite tutorials</h1>)
const SubTitle = () => (<h1>These are the one's I used with this page</h1>)
const NotFound = () => (<h1>404.. This page is not found!</h1>)

/*
const Address = (props) => <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
*/

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

/*
const Container = (props) => <div>
<div>
  <AppBarExample/>

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
*/

export default App
