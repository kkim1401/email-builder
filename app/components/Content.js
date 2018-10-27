import fp from 'lodash/fp';
import { css } from 'emotion';
import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import MenuItem from './MenuItem';
import contentTypes from '../constants/contentTypes';

const rootStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',
  padding: '8px',
});

const menuStyles = css({
    height: 'min-content',
});

const gridListTileStyles = css({
  height: 'auto',
});

const Content = () => (
  <div className={rootStyles}>
    <GridList className={menuStyles} spacing={8} cols={3} cellHeight='auto'>
      {
        fp.compose(
          fp.map(type => (
            <GridListTile key={type} className={gridListTileStyles}>
              <MenuItem type={type}/>
            </GridListTile>
          )),
          fp.values
        )(contentTypes)
      }
    </GridList>
</div>
);

export default Content;
