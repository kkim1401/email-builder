import { connect } from 'react-redux';
import * as actions from '../../actions/items';
import App from './App';

export default connect(null, {
  onReorderItem: actions.reorderItem,
})(App);
