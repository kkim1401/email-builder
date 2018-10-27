import { connect } from 'react-redux';
import * as selectors from '../../selectors/items';
import Canvas from './Canvas';

export default connect(state => ({
  ids: selectors.getOrderedIds(state),
}))(Canvas);
