import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import contentTypes from '../../constants/contentTypes';

const TitleIcon = lazy(() => import('@material-ui/icons/Title'));
const ImageIcon = lazy(() => import('@material-ui/icons/InsertPhoto'));
const TextFieldsIcon = lazy(() => import('@material-ui/icons/TextFields'));

class MenuItemContent extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  }

  renderComponentByType = () => {
    const { type } = this.props;
    const style = css({
      color: 'black',
      height: '36px',
      width: '36px',
    });
    return (
      type === contentTypes.HEADER && <TitleIcon className={style}/> ||
      type === contentTypes.IMAGE && <ImageIcon className={style}/> ||
      type === contentTypes.TEXTFIELDS && <TextFieldsIcon className={style}/> ||
      null
    );
  }

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          {this.renderComponentByType()}
        </Suspense>
        <Typography variant="subtitle1">
          {this.props.type}
        </Typography>
      </React.Fragment>
    )
  }
}

export default MenuItemContent;
