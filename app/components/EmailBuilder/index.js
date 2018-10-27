import { connect } from 'react-redux';
import EmailBuilder from './EmailBuilder';
import * as selectors from '../../selectors/items';

export default connect(state => ({
  items: selectors.getOrderedItems(state),
}))(EmailBuilder);
