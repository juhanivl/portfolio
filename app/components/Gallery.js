import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
    /*
    Using this article:
    http://themarklee.com/2013/12/26/simple-diy-responsive-
    slideshow-made-html5-css3-javascript/
    Create a native JavaScript slide show for your photos (NOT using jQuery)
    */

    const styles = {
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

    const tilesData = [
      {
        img: './components/images/51pegasib.jpg',
        title: '51 Pegasi B',
        author: 'Nasa',
      },
      {
        img: './components/images/ceres.jpg',
        title: 'Ceres',
        author: 'Nasa',
      },
      {
        img: './components/images/enceladus.jpg',
        title: 'Enceladus',
        author: 'Nasa',
      },
      {
        img: './components/images/kepler16b.jpg',
        title: 'Kepler 16b',
        author: 'Nasa',
      },
      {
        img: './components/images/kepler186f.jpg',
        title: 'Kepler-186f',
        author: 'Nasa',
      },
      {
        img: './components/images/superearth.jpg',
        title: 'Superearth',
        author: 'Nasa',
      },
      {
        img: './components/images/titan.jpg',
        title: 'Titan',
        author: 'Nasa',
      },
      {
        img: './components/images/jupiter.jpg',
        title: 'Jupiter',
        author: 'Nasa',
      },
    ];


    return(
      <div style={styles.root}>
        <GridList
          cellHeight={500}
          style={styles.gridList}
          cols={3}
        >
          <Subheader>Nasa Posters</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
