import { connect } from 'react-redux';
import * as actions from '../../actions/items';
import MenuItem from './MenuItem';

export default connect(null, {
  onClick: actions.addItem,
})(MenuItem);
