import { connect } from 'react-redux';
import * as actions from '../../actions/items';
import * as selectors from '../../selectors/items';
import CanvasItem from './CanvasItem';

export default connect((state, { id }) => ({
  item: selectors.getItemById(state, id),
}), {
  onChange: actions.updateItem,
  onClick: actions.selectItem,
})(CanvasItem);
