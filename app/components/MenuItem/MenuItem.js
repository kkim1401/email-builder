import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import MenuItemContent from './MenuItemContent';

class MenuItem extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  }

  handleClick = () => {
    this.props.onClick({
      type: this.props.type,
    })
  }

  render() {
    return <Card
      className={
      css({
        minWidth: '150px',
      })}
      onClick={this.handleClick}
    >
      <CardActionArea>
        <CardContent className={
          css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          })
        }>
          <MenuItemContent type={this.props.type}/>
        </CardContent>
      </CardActionArea>
    </Card>
  }
}

export default MenuItem;
