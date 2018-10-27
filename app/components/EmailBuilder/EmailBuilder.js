import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Email, Item, Span, renderEmail } from 'react-html-email';
import contentTypes from '../../constants/contentTypes';

class EmailBuilder extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  }

  getEmailComponent = ({type, content}) => (
    type === contentTypes.HEADER && (
      <Item align='center'>
        <Span fontSize={20}>{content}</Span>
      </Item>
    ) || null
  );

  getEmail = () => (
    <Email title='Hello World!'>
      {_.map(this.props.items, item => this.getEmailComponent(item))}
    </Email>
  )

  render() {
    return this.props.children(renderEmail(this.getEmail()));
  }
}

export default EmailBuilder;
