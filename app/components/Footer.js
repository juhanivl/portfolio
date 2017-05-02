import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      date: ""
    };
    this.select = this.select.bind(this);
  }


  select(index){
    this.setState({selectedIndex: index});
  }

  render() {
    const styles = {
      footerStyle: {
        backgroundColor: "#fafafa"
      }
    };

    return (

      <div style={styles.footerStyle}>
        <p>Footer Set date</p>
      </div>

    );
  }
}

export default Footer;
/*  <Paper zDepth={1}>
    <BottomNavigation selectedIndex={this.state.selectedIndex}>
      <BottomNavigationItem
        label="Recents"
        icon={recentsIcon}
        onTouchTap={() => this.select(0)}
      />
      <BottomNavigationItem
        label="Favorites"
        icon={favoritesIcon}
        onTouchTap={() => this.select(1)}
      />
      <BottomNavigationItem
        label="Nearby"
        icon={nearbyIcon}
        onTouchTap={() => this.select(2)}
      />
    </BottomNavigation>
  </Paper>*/
/*<p>
  Contact me via Linkedin <a href="https://www.linkedin.com/in/juhanilavonen?trk=hp-identity-photo" target="_blank">Linkedin</a>!
</p>*/
