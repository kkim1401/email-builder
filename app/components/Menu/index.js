import { connect } from 'react-redux';
import * as actions from '../../actions/items';
import * as selectors from '../../selectors/items';
import Menu from './Menu';

export default connect(state => ({
  id: selectors.getSelectedId(state),
  ids: selectors.getOrderedIds(state),
}), {
  onClick: actions.selectItem,
})(Menu);
